import { styled } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import adventureFont from '../fonts/adventure-font.ttf';

const blink = keyframes`
  from {
    border: 1px solid #703199;
    transition: .5s ease-in-out;
  }
  to {
    box-shadow: 0px 0px 90px 17px rgba(255,255,255,0.78);
    border: 1px solid white;
    transition: .5s ease-in-out;
  }
`;

export const StyledLandingPage = styled('div', {
  name: 'StyledLandingPage',
})({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#703199',
});

export const StyledLandingPageImage = styled('img', {
  name: 'StyledLandingPageImage',
})({
  width: '40%',
  padding: '50px',
  height: '55%',
  margin: '50px auto 0 auto',
  border: '2px solid white',
  borderRadius: '20px',
  animation: `${blink} 1s infinite ease`,
});

export const StyledStartButton = styled('button', {
  name: 'StyledSTartButton',
})({
  margin: '60px auto',
  fontSize: '30px',
  padding: '5px 30px 5px 30px',
  fontFamily: adventureFont,
});
