import React, { useState, useEffect } from 'react';

const Header = ({ score }) => {
  return (
    <div>
      <h1>Score: {score}</h1>
    </div>
  );
};

export default Header;
