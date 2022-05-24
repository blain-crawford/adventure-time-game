import { styled } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import adventureFont from '../fonts/adventure-font.ttf';

export const StyledHeader = styled('div', {
  name: 'StyledHeader',
})({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  margin: '5px',
  position: 'fixed',
  width: '95%',
});

export const StyledTitleButton = styled('button', {
  name: 'StyledSTartButton',
})({
  fontSize: '30px',
  padding: '5px 30px 5px 30px',
  fontFamily: adventureFont,
});

export const StyledScore = styled('h1', {
  name: 'StyledScore',
})({
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px',
  padding: '20px',
  backgroundColor: 'white',
});
