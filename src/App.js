import { useEffect } from 'react';
import './App.css';
import Arrow from './components/Header/Arrow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mainbody from './components/Main/Mainbody';

function App() {
  useEffect(() => {
    AOS.init(
      {
        delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
      }
    );
    AOS.refresh();
  }, []);
  return (
    <>
    <Header />
    <Arrow />
    <Mainbody />
    <Footer />
    </>
  );
}

export default App;
