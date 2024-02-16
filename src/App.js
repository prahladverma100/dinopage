import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import About_dinol from './component/About_dinol';
import Tokenomics from './component/Tokenomics';
import Utility_usecas from './component/Utility_usecas';
import Faq from './component/Faq';
import Last_section from './component/Last_section';
import Roadmap from './component/Roadmap';
import Backtotop from './component/common/Backtotop';
import Preloader from './component/common/Preloader';
import {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
    useEffect(() => {
      Aos.init({
        duration: 1500,
        once:true,
      });
    }, [])
  
  return (
    < div className = 'overflow-hidden' >
      <Header />
      < About_dinol />
      < Tokenomics />
      < Utility_usecas />
      <Roadmap/>
      < Faq />
      < Last_section />
      <Backtotop />
      <Preloader/>
   
    </div>
  );
}

export default App;
