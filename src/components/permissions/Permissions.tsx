import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

import './assets/scss/permissions.scss';

export default function Permissions() {
   return (
      <div className='permissions-menu'>
         <FormControl display='flex' alignItems='center' justifyContent='flex-end'>
            <FormLabel htmlFor='en-notf'>
               Enable notifications?
            </FormLabel>
            <Switch id='en-notf' />
         </FormControl>
      </div>
   );
}