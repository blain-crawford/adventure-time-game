import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CardContainer from './CardContainer';
import AdventureTimeLandingScreen from './AdventureTimeLandingScreen';

const App = () => {
  const [cardArray, setCardArray] = useState([]);
  const [screen, setScreen] = useState('landing');


  const shuffleCards = (cardArray) => {
    cardArray.sort(() => Math.random() - 0.5);
    setCardArray(cardArray);
  }

  const playGame = () => {
    setScreen('play');
    getCardInfo();
  };

  const returnToTitle = () => {
    setScreen('landing');
    getCardInfo();
  };

  const getCardInfo = () => {
    axios
      .get('https://adventure-time-api.herokuapp.com/api/v1/characters')
      .then((details) => {
        console.log(details);
        shuffleCards(details.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const wasChosen = (cardIndex) => {
    let newCardArray = [...cardArray];
    if (!newCardArray[cardIndex].chosen) {
      newCardArray[cardIndex].chosen = 'chosen';
      shuffleCards(newCardArray);
      console.log(cardArray);
    } else {
      console.log('App working')
    }
    
  }

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
          wasChosen={wasChosen}
        />
        <button onClick={returnToTitle}>Return to Title</button>
      </div>
    );
  }
};

export default App;
