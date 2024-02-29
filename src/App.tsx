import DateDiffCalculator from "./components/dateDiffCalculator/DateDiffCalculator";
import Permissions from "./components/permissions/Permissions";

import { ChakraProvider } from "@chakra-ui/react";

import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

import './App.scss';


function App() {
  getToken(messaging, { vapidKey: import.meta.env.VITE_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken.slice(0, 5) + '...');
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  return (
    <ChakraProvider>
      <div className="container">
        <Permissions/>
        <DateDiffCalculator />
      </div>
    </ChakraProvider>
  );
}

export default App;
