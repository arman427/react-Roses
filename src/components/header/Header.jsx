import './header.scss'
import Logo from './../../img/icons/Logo.svg';
import Nadpis from './../../img/icons/Розы из Атласных Лент.svg';
import Socials from './Socials';
import { useState } from 'react';
import Overlay from './overlay-mobile';

const Header = () => {
   const [isBurger, setIsBurger] = useState(false);

   const handleClick = () => {
      if (!isBurger) {
         setIsBurger(true);
         document.body.style.overflow = 'hidden';
         document.documentElement.style.overflow = 'hidden';
      } else {
         setIsBurger(false);
         document.body.style.overflow = '';
         document.documentElement.style.overflow = '';
      }
   };

   const removeMenu = () => {
      setIsBurger(false);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
   };

   const handleAnchorClick = (event, targetId) => {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
         targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      }
   };

   return (
      <>
         <header className='header'>
            <div className="container header-container">
               <div className="header-content header-nav__mobile">
                  <a href="/" className='header-logo'>
                     <img src={Logo} alt="Логотип" className='roza' />
                     <img src={Nadpis} alt="Логотип" className='nadpis' />

                  </a>

                  <nav className="header-nav">
                     <ul className="header-nav__list">
                        <li><a href="/">Главная</a></li>
                        <li><a href="#about" onClick={(e) => handleAnchorClick(e, 'about')}>О нас</a></li>
                        <li><a href="#price" onClick={(e) => handleAnchorClick(e, 'price')}>Цены</a></li>
                        <li><a href="#primery_rabot" onClick={(e) => handleAnchorClick(e, 'primery_rabot')}>Примеры работ</a></li>
                        <li><a href="#process_zakaza" onClick={(e) => handleAnchorClick(e, 'process_zakaza')}>Процесс заказа</a></li>
                     </ul>
                  </nav>

                  <Socials />

                  <div className="nav-icon-btn" onClick={handleClick}>
                     <button className={`nav-icon ${isBurger ? 'nav-icon--active' : ''}`}>
                     </button>
                  </div>

               </div>
            </div>
         </header>
         <Overlay handleClick={handleClick} isBurger={isBurger} removeMenu={removeMenu} handleAnchor={handleAnchorClick}/>
      </>

   );
}

export default Header;