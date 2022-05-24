import { styled, createTheme, maxWidth, display, fontSize } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cardBackground from '../images/card-background.jpeg';
import adventureLogo from '../images/adventure_time_logo.jpeg';
export const StyledCard = styled(Card, {
  name: 'StyledCard',
})({
  color: 'white',
  backgroundColor: '#703199',
  width: '300px',
  height: '500px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'ceter',
  textAlign: 'center',
  border: '1px solid purple',
  borderRadius: '20px',
  margin: '10px',
});

export const StyledInnerCard = styled('div', {
  name: 'StyledInnerCard',
})({
  backgroundColor: 'purple',
  height: '100%',
  border: '1px solid white',
  boxShadow: '0px 0px 2px 1px rgba(255,255,255,0.78)',
  padding: '20px',
  borderRadius: '5px',
});

export const StyledBackOfCard = styled('div', {
  name: 'StyledBackOfCard',
})({
  backgroundImage: `url(${adventureLogo})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '1px solid white',
  boxShadow: '0px 0px 2px 1px rgba(255,255,255,0.78)',
  borderRadius: '5px',
  height: '500px',
});

export const StyledCardHeader = styled(CardContent, {
  name: 'StyledCardHeader',
})({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '20px',
  margin: '0',
  padding: '0',
});

export const StyledCardImage = styled(CardMedia, {
  name: 'StyledCardImage',
})({
  margin: '10px auto',
  border: '2px solid white',
  borderRadius: '10px',
  backgroundImage: `url(${cardBackground})`,
});

export const StyledCardContent = styled(CardContent, {
  name: 'StyledCardContent',
})({
  textAlign: 'left',
  padding: '0',
  paddingTop: '20px',
  margin: '20px auto',
  color: 'white',
  borderTop: '1px solid white',
});

export const StyledCardText = styled('p', {
  name: 'StyledCardtext',
})({
  fontFamily:
    'url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,700&family=Macondo&family=Roboto:ital@0;1&display=swap)',
  color: 'white',
});
