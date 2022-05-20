import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CardContainer from './CardContainer';
import AdventureTimeLandingScreen from './AdventureTimeLandingScreen'
const App = () => {
  const [cardArray, setCardArray] = useState([]);

  const getCardInfo = () => {
    axios
      .get('https://adventure-time-api.herokuapp.com/api/v1/characters')
      .then((details) => {
        console.log(details);
        setCardArray(details);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div>
    //   <Header />
    //   <button onClick={getCardInfo}>Hello, Adventure Time</button>
    //   <CardContainer />
    // </div>
    <AdventureTimeLandingScreen />
  );
};

export default App;
