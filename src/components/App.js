import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CardContainer from './CardContainer';
import AdventureTimeLandingScreen from './AdventureTimeLandingScreen';

const App = () => {
  const [cardArray, setCardArray] = useState([]);
  const [screen, setScreen] = useState('landing');
  const [score, setScore] = useState(0);

  const shuffleCards = (cardArray) => {
    cardArray.sort(() => Math.random() - 0.5);
    setCardArray(cardArray);
  };

  const playGame = () => {
    setScreen('play');
    getCardInfo();
  };

  const returnToTitle = () => {
    setScreen('landing');
    getCardInfo();
  };

  const checkForWin = (score) => {
    if (score === 8) {
      setScreen('win');
      setScore(0)
    }
  }

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
      setScore(score + 1);
      console.log(score)
      checkForWin(score)
    } else {
      console.log('App working');
      setScore(0);
      getCardInfo();
    }
  };

  if (screen === 'landing') {
    return <AdventureTimeLandingScreen screen={screen} playGame={playGame} />;
  } else if (screen === 'play') {
    return (
      <div>
        <Header 
          score={score}
        />
        <CardContainer cardArray={cardArray} wasChosen={wasChosen} />
        <button onClick={returnToTitle}>Return to Title</button>
      </div>
    );
  } else if (screen === 'win') {
    return <button onClick={returnToTitle}>Return to Title</button>;
  }
};

export default App;
