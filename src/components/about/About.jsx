import { useVisibility } from '../../hooks/useVisibility';
import './About.scss'
import AboutCards from './AboutCards';

const About = () => {
   const [myDescRef, isDescVisible] = useVisibility({ threshold: 0.3 });

   return (
      <section className='about' id='about'>
         <div className="container">
            <div className="about-content">
               <div className={`about-desc ${isDescVisible ? 'active' : ''}`} ref={myDescRef}>
                  <h1 className="title about-title">О нас</h1>
                  <p className="about-desc__text">
                     Мы предлагаем нечто большее, чем просто цветы – мы предлагаем вечную красоту. Мы специализируемся на создании изысканных роз из высококачественных атласных лент, которые являются идеальной альтернативой живым цветам.
                  </p>
               </div>
            </div>
            
            <AboutCards />

         </div>
      </section>
   );
}

export default About;