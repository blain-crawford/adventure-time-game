import React, { useState, useEffect } from 'react';

const Header = ({ score }) => {
  return (
    <div style={{backgroundColor: 'blue', padding: '0', margin: '0'}}>
      <h1 style={{margin: '0', padding: '0'}}>Score: {score}</h1>
    </div>
  );
};

export default Header;
