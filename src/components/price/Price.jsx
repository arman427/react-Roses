import './price.scss'
import withBlestka from './../../img/red-roses (1) 1.jpg';
import withoutBlestka from './../../img/res-roses-WB.jpg';

const Price = () => {
   return (
      <section className="price" id='price'>
         <div className="container">
            <h1 className='title price-content__title'>Цены</h1>
            <div className="price-content">
               <div className="price-item">
                  <img src={withoutBlestka} alt="" className='price-item__img' />
                  <div className="price-item__desc">
                     <h3 className="price-desc__title">1 роза без блесток</h3>
                     <p className='price-desc__price'>70 рублей</p>
                  </div>
               </div>
               <div className="price-item">
                  <img src={withBlestka} alt="" className='price-item__img' />
                  <div className="price-item__desc">
                     <h3 className="price-desc__title">1 роза c блестками</h3>
                     <p className='price-desc__price'>80 рублей</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Price;