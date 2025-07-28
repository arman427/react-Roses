import './process.scss'

const ProcessItems = () => {
   return (
      <>
         <div className="process-item">
            <h3 className="card-title process-item__title">Шаг 1</h3>
            <div className="process-item__text">Свяжитесь с нами любым удобным вам способом. Позвоните по телефону, напишите в Telegram, Whatsapp</div>
         </div>
         <div className="process-item">
            <h3 className="card-title process-item__title">Шаг 2</h3>
            <div className="process-item__text">
               <ul className="process-text__list">
                  <li className="process-list__item">Цвет: Подберем идеальные цвета атласных лент, исходя из ваших предпочтений</li>
                  <li className="process-list__item">Декор: С блестками или без</li>
                  <li className="process-list__item">Размер: Определим, какого размера будут розы (мелкие, средние, крупные)</li>
                  <li className="process-list__item">Сроки изготовления: Обсудим, к какой дате вам нужен заказ</li>
                  <li className="process-list__item">Обьем заказа: Точное количество роз</li>
               </ul>
            </div>
         </div>
         <div className="process-item">
            <h3 className="card-title process-item__title">Шаг 3</h3>
            <div className="process-item__text">
               <ul className="process-text__list">
                  <li className="process-list__item">Стоимость: Мы предоставим точную цену</li>
                  <li className="process-list__item">Подтверждение: Как только все детали будут согласованы и стоимость утверждена, мы запросим ваше подтверждение заказа</li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default ProcessItems;