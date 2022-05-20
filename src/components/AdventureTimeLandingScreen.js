import { maxWidth } from "@mui/system";
import React, { useState, useEffect } from "react";
import adventureTimeFriends from './images/adventure-time-friends.jpeg';
// import landingAudio from './music/landing-theme.mp3'


const AdventureTimeLandingScreen = () => {
  return(
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src={adventureTimeFriends} style={{width: '50%', height: '50%', margin: '0 auto'}}/>
    </div>
  )
}

export default AdventureTimeLandingScreen;