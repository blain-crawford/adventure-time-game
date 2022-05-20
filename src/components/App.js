import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CardContainer from './CardContainer';
import AdventureTimeLandingScreen from './AdventureTimeLandingScreen';

const App = () => {
  const [cardArray, setCardArray] = useState([]);
  const [screen, setScreen] = useState('landing');

  const playGame = () => {
    setScreen('play');
    getCardInfo();
  };

  const returnToTitle = () => {
    setScreen('landing');
  };

  const getCardInfo = () => {
    axios
      .get('https://adventure-time-api.herokuapp.com/api/v1/characters')
      .then((details) => {
        console.log(details);
        setCardArray(details.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (screen === 'landing') {
    return <AdventureTimeLandingScreen 
    screen={screen} 
    playGame={playGame} 
    />;
  } else if (screen === 'play') {
    return (
      <div>
        <Header />
        <CardContainer 
          cardArray={cardArray}
        />
        <button onClick={returnToTitle}>Return to Title</button>
      </div>
    );
  }
};

export default App;
