import DateDiffCalculator from "./components/dateDiffCalculator/DateDiffCalculator";

import './App.scss';
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

function App() {
  getToken(messaging, { vapidKey: import.meta.env.VITE_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  return (
    <div className="container">
      <DateDiffCalculator />
    </div>
  );
}

export default App;
