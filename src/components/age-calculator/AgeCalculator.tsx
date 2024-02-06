import './assets/scss/ageCalculator.scss';

export default function AgeCalculator() {
   return (
      <div className="age-container">
         <div className="age-inputs">
            <div className='inp-block'>
               <label htmlFor="dd-input">Day</label>
               <input type="text" id='dd-input' placeholder='DD' />
            </div>
            <div className='inp-block'>
               <label htmlFor="mm-input">Month</label>
               <input type="text" id='mm-input' placeholder='MM' />
            </div>
            <div className='inp-block'>
               <label htmlFor="yyyy-input">Year</label>
               <input type="text" id='yyyy-input' placeholder='YYYY' />
            </div>
         </div>
         <div>
            <hr />
         </div>
         <div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
}