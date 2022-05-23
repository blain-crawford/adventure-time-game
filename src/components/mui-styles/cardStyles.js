import { styled, createTheme, maxWidth, display } from '@mui/system';
import { keyframes } from '@mui/styled-engine';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const StyledCard = styled(Card, {
  name: 'StyledCard'
}) ({
  width: '300px',
  height: 'auto',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'ceter',
  textAlign: 'center',
  border: '1px solid purple',
  margin: '20px',
  gap: '20px'
})

export const StyledCardImage = styled(CardMedia, {
  name: 'StyledCardImage'
}) ({
  margin: '0 auto',
  border: '1px solid red'
})

export const StyledCardContent = styled(CardContent, {
  name: 'StyledCardContent'
}) ({
  textAlign: 'center'
})