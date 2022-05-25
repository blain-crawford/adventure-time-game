import { styled } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import winningBackground from '../images/winning-screen.png';

const spin = keyframes`
  from {
    width: 0vw;
    height: 0vw
    transform: rotate(0deg);
    transition: 5s ease-in-out;
  }
  to {
    width: '50vw';
    height: '50vh';
    transform: rotate(1440deg);
    transition: 5s ease-in-out;
  }
`;

const visible = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const StyledWinningPage = styled('div', {
  name: 'StyledLandingPage',
})({
  width: '100vw',
  height: '100vh',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundImage: `url(${winningBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundColor: '#41407b',
  animation: `${spin} 5s`,
});

export const StyledStartButton = styled('button', {
  name: 'StyledSTartButton',
})({
  position: 'relative',
  bottom: '25px',
  margin: '0 auto',
  fontSize: '30px',
  padding: '5px 90px 5px 90px',
  animation: `${visible} 5s`
});
