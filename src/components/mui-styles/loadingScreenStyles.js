import { styled } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import adventureFont from '../fonts/adventure-font.ttf';

const loading = keyframes`
  from {
    background-color: white;
    transition: 3s ease-in-out;
  }
  to {
    background-color: #f04a3e ;
    transition: 3s ease-in-out;
  }
`;

export const StyledLoadingPage = styled('div', {
  name: 'StyledLandingPage',
})({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#5accff',
});

export const StyledLoadingPageImage = styled('img', {
  name: 'StyledLandingPageImage',
})({
  width: '40%',
  padding: '50px',
  height: '55%',
  margin: '0 auto',
});

export const StyledLoadingDiv = styled('div', {
  name: 'StyledLoadingDiv'
}) ({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledLoadingFont = styled('h1', {
  name: 'StyledLoadingFont'
}) ({
  color: 'white',
  margin: '0',
  padding: '0'
})

export const StyledLoadingDot1 = styled('div', {
  name: 'StyledLoadingDot1'
}) ({
  backgroundColor: 'white',
  animation: `${loading} 1s infinite ease-in-out`,
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginRight: '10px',
  padding: '0'
})

export const StyledLoadingDot2 = styled('div', {
  name: 'StyledLoadingDot2'
}) ({
  backgroundColor: 'white',
  animation: `${loading} 1.1s infinite ease-in-out`,
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginRight: '10px',
  padding: '0',
})

export const StyledLoadingDot3 = styled('div', {
  name: 'StyledLoadingDot3'
}) ({
  backgroundColor: 'white',
  animation: `${loading} 1.2s infinite ease-in-out`,
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginRight: '10px',
  padding: '0'
})