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
         <div className='divider'>
            <hr />
            <div className='star-arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
            </div>
         </div>
         <div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
}