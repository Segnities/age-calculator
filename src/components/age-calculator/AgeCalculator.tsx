import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import * as Yup from "yup";

import './assets/scss/ageCalculator.scss';

interface AgeProps {
   day: string;
   month: string;
   year: string;
}

const validationSchema = Yup.object().shape({
   day: Yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(2, 'Must be exactly 2 digits')
      .max(2, 'Must be exactly 2 digits')
      .test('valid-day', 'Invalid day', (value, context) => {
         const { year, month } = context.parent;
         const maxDay = new Date(year, month, 0).getDate();

         return parseInt(value) < maxDay;
      }),
   month: Yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(2, 'Must be exactly 2 digits')
      .max(2, 'Must be exactly 2 digits')
      .test('valid-month', 'Invalid month', (value) => parseInt(value) >= 1 && parseInt(value) <= 12)
   ,
   year: Yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits')
      .test('valid-year', 'Invalid year', (value) => parseInt(value) >= 1917 && parseInt(value) <= 2024)
});

export default function AgeCalculator() {
   return (
      <div className="age-container">
         <Formik
            validateOnChange={true}
            validationSchema={validationSchema}
            initialValues={{ month: '', day: '', year: '' }}
            onSubmit={(val) => console.log(val)
            }>
            {({ errors, touched }: FormikProps<AgeProps>) => (
               <Form onChange={()=> console.log('Something changed...')} className="age-inputs">
                  <div className='inp-block'>
                     <label htmlFor="dd-input" className={errors.day && 'error-color'}>Day</label>
                     <Field name='day' type="text" id='dd-input' placeholder='DD' className={errors.day && 'error-border'} />
                     {errors.day && touched.day && <p className='error-msg'>{errors.day}</p>}
                  </div>
                  <Field name='month' >
                     {({ field }: FieldProps) => (
                        <div className='inp-block'>
                           <label htmlFor="mm-input" className={errors.month && 'error-color'}>Month</label>
                           <input {...field} type="text" id='mm-input' placeholder='MM' className={errors.month && 'error-border'}/>
                           {errors.month && touched.month ? <p className='error-msg'>{errors.month}</p> : <p></p>}
                        </div>
                     )}
                  </Field>
                  <Field name='year' >
                     {({ field }: FieldProps) => (
                        <div className='inp-block'>
                           <label htmlFor="yyyy-input" className={errors.year && 'error-color'}>Year</label>
                           <input {...field} type="text" id='yyyy-input' placeholder='YYYY' className={errors.year && 'error-border'}/>
                           {errors.year && touched.year && <p className='error-msg'>{errors.year}</p>}
                        </div>
                     )}
                  </Field>
               </Form>
            )}
         </Formik>
         <div className='divider'>
            <hr />
            <div className='star-arrow'>
               <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
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