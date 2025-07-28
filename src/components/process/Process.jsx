import './process.scss'
import ProcessItems from './ProcessItems';

const Process = () => {
   return (
      <section className='process' id='process_zakaza'>
         <div className="container">
            <h1 className="title process-title">Процесс заказа</h1>
            <div className="process-content">
               <ProcessItems />
            </div>
         </div>
      </section>
   );
}

export default Process;