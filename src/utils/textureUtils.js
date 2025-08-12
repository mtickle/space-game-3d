import * as THREE from 'three';

// --- Perlin Noise Implementation ---
const PerlinNoise = function () {
    this.p = new Uint8Array(512);
    this.init = (function (p) {
        for (let i = 0; i < 256; i++) p[i] = i;
        for (let i = 255; i > 0; i--) {
            const n = Math.floor((i + 1) * Math.random());
            const q = p[i]; p[i] = p[n]; p[n] = q;
        }
        for (let i = 0; i < 256; i++) p[i + 256] = p[i];
    })(this.p);
};
PerlinNoise.prototype = {
    noise: function (x, y, z) {
        const p = this.p;
        let X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
        x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
        const u = this.fade(x), v = this.fade(y), w = this.fade(z);
        const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z,
            B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
        return this.lerp(w, this.lerp(v, this.lerp(u, this.grad(p[AA], x, y, z), this.grad(p[BA], x - 1, y, z)), this.lerp(u, this.grad(p[AB], x, y - 1, z), this.grad(p[BB], x - 1, y - 1, z))), this.lerp(v, this.lerp(u, this.grad(p[AA + 1], x, y, z - 1), this.grad(p[BA + 1], x - 1, y, z - 1)), this.lerp(u, this.grad(p[AB + 1], x, y - 1, z - 1), this.grad(p[BB + 1], x - 1, y - 1, z - 1))));
    },
    noise4D: function (x, y, z, w) {
        return (this.noise(x, y, z) + this.noise(y, z, w) + this.noise(z, w, x) + this.noise(w, x, y)) / 4;
    },
    fade: function (t) { return t * t * t * (t * (t * 6 - 15) + 10); },
    lerp: function (t, a, b) { return a + t * (b - a); },
    grad: function (hash, x, y, z) {
        const h = hash & 15;
        const u = h < 8 ? x : y, v = h < 4 ? y : h === 12 || h === 14 ? x : z;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }
};

// --- Texture Helper Functions ---

export function createSeamlessStarTexture(color) {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;
    const noise = new PerlinNoise();
    const frequency = 5.0 / size;

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const u = x / size, v = y / size;
            const r = size / (2 * Math.PI);
            const nx = r * Math.cos(2 * Math.PI * u), ny = r * Math.sin(2 * Math.PI * u);
            const nz = r * Math.cos(2 * Math.PI * v), nw = r * Math.sin(2 * Math.PI * v);
            const noiseValue = noise.noise4D(nx * frequency, ny * frequency, nz * frequency, nw * frequency);
            const shade = (noiseValue + 1) * 128;
            const baseColor = new THREE.Color(color);
            const finalR = baseColor.r * shade, finalG = baseColor.g * shade, finalB = baseColor.b * shade;
            const index = (y * size + x) * 4;
            data[index] = finalR;
            data[index + 1] = finalG;
            data[index + 2] = finalB;
            data[index + 3] = 255;
        }
    }
    ctx.putImageData(imageData, 0, 0);
    return new THREE.CanvasTexture(canvas);
}

export function createFlareTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,0.4)');
    gradient.addColorStop(0.5, 'rgba(255,200,50,0.2)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
}

export function createGlowTexture(color) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    const starColor = new THREE.Color(color);
    gradient.addColorStop(0.0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.3, `rgba(${starColor.r * 255}, ${starColor.g * 255}, ${starColor.b * 255}, 0.5)`);
    gradient.addColorStop(1.0, 'rgba(0,0,0,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
}
