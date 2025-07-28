import './swiper.scss';
import slide1 from './../../img/aqua-roses.jpg';
import slide2 from './../../img/white-roses.jpg';
import slide3 from './../../img/res-roses-WB.jpg';
import slide4 from './../../img/purple-roses.jpg';
import slide5 from './../../img/aqua-roses2.jpg';
import slide6 from './../../img/pink-roses-blestka.jpg';
import slide7 from './../../img/red-roses-blackBox.jpg';
import slide8 from './../../img/red-roses-Box.jpg';
import slide9 from './../../img/pink-roses.jpg';
import slide10 from './../../img/pink-purple-aqua-roses 1 (1) 1.jpg';

import { SwiperSlide, Swiper } from 'swiper/react';

import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import SwiperButtons from './SwiperButtons';


const Swiperr = () => {
   return (
      <>
         <h1 className="title swiper-content__title" id='primery_rabot'>Примеры работ</h1>
         <section className="swiper-content">
            <Swiper
               modules={[Navigation]}
               navigation={{
                  nextEl: '.swiperNext',
                  prevEl: '.swiperPrev',
                  clickable: true,
               }}
               loop={true}
               speed={300}
               slidesPerView={5}
               className='swiper_container'
               breakpoints={{
                  320: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  700: { slidesPerView: 3 },
                  1000: { slidesPerView: 4 },
                  1300: { slidesPerView: 5 },
               }}
            >
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide1} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide2} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide3} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide4} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide5} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide6} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide7} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide8} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide9} alt="" /></div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="swiper-slide"><img src={slide10} alt="" /></div>
               </SwiperSlide>
            </Swiper>

            <SwiperButtons />
         </section>
      </>
   );
}

export default Swiperr;