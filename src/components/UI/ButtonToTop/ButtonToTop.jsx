import './buttontotop.scss';
import arrow from './../../../img/icons/arrow-up-square-fill 1.svg';
import { useState, useEffect } from 'react';

const ButtonToTop = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, []); 

   useEffect(() => {
      if (scrollY > 200) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   }, [scrollY]);

   const scrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }

   return (
      <div className={`buttonToTop-wrapper ${isVisible ? 'active' : ''}`}>
         <a href="" onClick={scrollToTop}>
            <img src={arrow} alt="" />
         </a>
      </div>
   );
}

export default ButtonToTop;