import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <button onClick={getCardInfo}>Hello, Adventure Time</button>
    </div>
  );
};

export default App;
