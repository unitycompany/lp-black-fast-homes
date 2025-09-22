import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Render from "./sections/Render";
import './styles/global.css'; 

function App() {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);

  return (
    <>
      <Render />
    </>
  )
}

export default App
