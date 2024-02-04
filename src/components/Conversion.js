import { useState, useEffect } from 'react';

const ConvertToPDF = ({ status }) => {
 const [progress, setProgress] = useState(0);

 useEffect(() => {
    let intervalId;
    if (status === 'processing') {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalId);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 1000);
    } else {
      setProgress(0);
    }
    return () => clearInterval(intervalId);
 }, [status]);

 return (
    <div>
      {status === 'processing' && (
        <div>
          <p>Conversion en cours...</p>
          <progress value={progress} max="100"></progress>
        </div>
      )}
      {status === 'success' && (
        <div>
          <p>Conversion terminée !</p>
          <progress value="100" max="100"></progress>
        </div>
      )}
      {status === 'error' && (
        <div>
          <p>Une erreur est survenue.</p>
          <button onClick={() => console.log('Retry')}>Réessayer</button>
        </div>
      )}
    </div>
 );
};

export default ConvertToPDF;
