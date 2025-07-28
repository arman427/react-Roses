import './swiper.scss'
import doubleArrow from './../../img/icons/swiper-double-arrow.svg';
import doubleArrowRotate from './../../img/icons/swiper-double-arrow-rotate.svg';

const SwiperButtons = () => {
   return (
      <div className="arrow-wrapper">
         <button className='swiperPrev'>
            <img src={doubleArrowRotate} alt="" />
         </button>

         <button className='swiperNext'>
            <img src={doubleArrow} alt="" />
         </button>
      </div>
   );
}

export default SwiperButtons;