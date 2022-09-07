import { useEffect } from 'react';
import './App.css';
import Index from './pages/index'

function App() {

  useEffect(() => {
    const title = `Light-Up | Everything's under controls`;
    document.title = title
  }, [])


  return (
    <>
      <Index />
    </>
  );
}

export default App;
