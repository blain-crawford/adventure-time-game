import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import CardContainer from './CardContainer';
import AdventureTimeLandingScreen from './AdventureTimeLandingScreen';
import AdventureTimeLoadingScreen from './AdventureTImeLoadingScreen';
import gameBoard from './images/gameboard.jpeg';
import WinningScreen from './WinningScreen';
const App = () => {
  const [cardArray, setCardArray] = useState([]);
  const [screen, setScreen] = useState('landing');
  const [score, setScore] = useState(0);

  const shuffleCards = (cardArray) => {
    cardArray.sort(() => Math.random() - 0.5);
    setCardArray(cardArray);
  };

  const playGame = () => {
    setScreen('loading');
  };

  const returnToTitle = () => {
    setScreen('landing');
  };

  const checkForWin = (score) => {
    if (score === 8) {
      setScreen('win');
      setScore(0);
    }
  };

  useEffect(() => {
    if (screen === 'loading') {
      setTimeout(getCardInfo, 3000);
    }
  }, [screen]);

  const getCardInfo = () => {
    axios
      .get('https://adventure-time-api.herokuapp.com/api/v1/characters')
      .then((details) => {
        setScreen('play');
        shuffleCards(details.data);
      })
      .catch((error) => {
        alert("Cards couldn't load Bro!  Refresh to try again!");
      });
  };

  const wasChosen = (cardIndex) => {
    let newCardArray = [...cardArray];
    if (!newCardArray[cardIndex].chosen) {
      newCardArray[cardIndex].chosen = 'chosen';
      shuffleCards(newCardArray);
      setScore(score + 1);
      checkForWin(score);
    } else {
      setScore(0);
      getCardInfo();
    }
  };

  if (screen === 'landing') {
    return <AdventureTimeLandingScreen screen={screen} playGame={playGame} />;
  } else if (screen === 'loading') {
    return <AdventureTimeLoadingScreen screen={screen} playGame={playGame} />;
  } else if (screen === 'play') {
    return (
      <div
        style={{
          backgroundImage: `url(${gameBoard})`,
          backgroundSize: 'cover',
          margin: '0',
          padding: '0',
        }}
      >
        <Header score={score} returnToTitle={returnToTitle} />
        <CardContainer cardArray={cardArray} wasChosen={wasChosen} />
      </div>
    );
  } else if (screen === 'win') {
    return <WinningScreen returnToTitle={returnToTitle} />;
  }
};

export default App;
