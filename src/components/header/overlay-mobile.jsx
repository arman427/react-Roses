import './overlay-mobile.scss';

const Overlay = ({ handleClick, isBurger, removeMenu, handleAnchor }) => {
   return (
      <div className={`overlay-mobile ${isBurger ? 'animated' : ''}`}>
         <div className="mobile-nav">
            <div className="nav-icon-btn" onClick={handleClick}>
               <button className={`nav-icon ${isBurger ? 'nav-icon--active' : ''}`}>
               </button>
            </div>
            <nav className="header-nav">
               <ul className="header-nav__list">
                  <li><a href="/" onClick={removeMenu}>Главная</a></li>
                  <li><a href="#" onClick={(e) => { handleAnchor(e, 'about'); removeMenu() }}>О нас</a></li>
                  <li><a href="#price" onClick={(e) => { handleAnchor(e, 'price'); removeMenu() }}>Цены</a></li>
                  <li><a href="#primery_rabot" onClick={(e) => { handleAnchor(e, 'primery_rabot'); removeMenu() }}>Примеры работ</a></li>
                  <li><a href="#process_zakaza" onClick={(e) => { handleAnchor(e, 'process_zakaza'); removeMenu() }}>Процесс заказа</a></li>
               </ul>
            </nav>
         </div>
      </div>
   );
}

export default Overlay;