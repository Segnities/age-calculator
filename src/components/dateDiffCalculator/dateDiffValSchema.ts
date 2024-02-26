import * as Yup from "yup";

export const dateDiffValSchema = Yup.object().shape({
   day: Yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(2, 'Must be exactly 2 digits')
      .max(2, 'Must be exactly 2 digits')
      .test('valid-day', 'Invalid day', (value, context) => {
         const { year, month } = context.parent;
         const maxDay = new Date(year, month, 0).getDate();
         if (value.length < 2) {
            return false;
         }
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
      .test('valid-year', 'Invalid year', (value) => parseInt(value) >= 1917 && parseInt(value) <= new Date().getFullYear())
});