import React, { useState, useEffect } from 'react';

const Card = ({ cardImage }) => {
  return (
    <div>
      <img src={cardImage} />
    </div>
  );
};

export default Card;
