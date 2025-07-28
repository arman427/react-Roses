import { useState, useEffect } from 'react';
import './welcome.scss';

const Welcome = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsVisible(true);
      }, 300);
      
      return () => clearTimeout(timer);
   }, [])

   return (
      <section className="welcome">
         <div className="container">
            <div className="welcome-content">
               <h1 className={`title welcome__title ${isVisible ? 'active' : ''}`}>Дарите нежность, дарите вечность..</h1>
               <p className={`welcome-subTitle ${isVisible ? 'active' : ''}`}>Атласные розы идеальны для тех, кто ищет необычный и долговечный подарок</p>
            </div>
         </div>
      </section>
   );
}

export default Welcome;