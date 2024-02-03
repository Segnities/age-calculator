import './assets/scss/ageCalculator.scss';

export default function AgeCalculator() {
   return (
      <div className="age-container">
         <div className="age-inputs">
            <input type="text" />
            <input type="text" />
            <input type="text" />
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