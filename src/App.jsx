// --- Components ---
import Header from './components/header/Header';
import About from './components/about/About';
import Price from './components/price/Price';
import Swiperr from './components/swiper/Swiper';
import Welcome from './components/welcome/welcome';
import Process from './components/process/Process';
import ButtonToTop from './components/UI/ButtonToTop/ButtonToTop';
import FeedBack from './components/Footer-FeedBack/FooterFeedBack';

import { BrowserRouter as Router } from 'react-router-dom'; // --- Navigation ---

// --- CSS ---
import './styles/base.scss';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/media.scss';



const App = () => {
   return (
      <Router>
         <Header />
         <Welcome />
         <About />
         <Price />
         <Swiperr />
         <Process />
         <FeedBack />
         <ButtonToTop />
      </Router>
   );
}

export default App;