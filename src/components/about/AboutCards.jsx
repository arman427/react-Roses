import { useVisibility } from '../../hooks/useVisibility';
import './About.scss'

const AboutCards = () => {
   const [myCardsRef, isCardsVisible] = useVisibility({ threshold: 0.3 });

   return (
      <div className={`about-cards ${isCardsVisible ? 'active' : ''}`} ref={myCardsRef}>
         <div className="about-item">
            <h3 className="card-title about-item__title">Долговечность</h3>
            <p className="about-item__text">В отличие от живых букетов, наши атласные розы не увядают. Они будут радовать глаз годами, сохраняя свой свежий и яркий вид.</p>
         </div>
         <div className="about-item">
            <h3 className="card-title about-item__title">Уникальность</h3>
            <p className="about-item__text">Каждое изделие создается вручную с любовью и вниманием, что делает его по-настоящему эксклюзивным подарком.</p>
         </div>
         <div className="about-item">
            <h3 className="card-title about-item__title">Элегантность</h3>
            <p className="about-item__text">Атласные розы выглядят невероятно реалистично и роскошно, добавляя нотку изысканности в любой интерьер или событие.</p>
         </div>
         <div className="about-item">
            <h3 className="card-title about-item__title">Идеальный подарок</h3>
            <p className="about-item__text">День рождения, годовщина, свадьба или просто желание порадовать близкого человека – наши розы станут незабываемым и трогательным презентом.</p>
         </div>
      </div>
   );
}

export default AboutCards;