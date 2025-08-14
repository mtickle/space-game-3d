// src/App.jsx
import StarMap3D from '@components/StarMap3D';
import { useEffect, useState } from 'react';
import './App.css';
import LoadingModal from './components/LoadingModal';

function App() {

  //--- API Wake-Up Logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  useEffect(() => {
    const wakeUpApi = async () => {
      setModalMessage("{{--- CONTACTING GALACTIC CARTOGRAPHY SERVERS ---}}");
      setIsModalOpen(true);

      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const baseUrl = import.meta.env.VITE_API_BASE_URL;

        const response = await fetch(`${baseUrl}/api/about/`, {
          headers: { 'x-api-key': apiKey }
        });

        // ✅ SANITY CHECK: Was the HTTP request successful?
        if (!response.ok) {
          // Throw an error to be caught by the catch block
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API is awake!', data);

      } catch (error) {
        console.error('Error waking up API:', error);
        setModalMessage('Could not connect to the API.');
        setTimeout(() => setIsModalOpen(false), 3000);
        return;
      }

      setIsModalOpen(false);
    };
    wakeUpApi();
  }, []);
  //--- End of API Wake-Up Logic

  return (
    <div className="App">
      <StarMap3D />
      <LoadingModal isOpen={isModalOpen} message={modalMessage} />
    </div>
  );
}

export default App;