export const theme = {
  color: {
    black: '#000',
    white: '#fff',
    backgroundFirst: '#54619c',
    backgroundSec: '#003156',
  },
  font: {
    fontFamily: 'Anton, sans-serif',
  }
};
export const getColor = color => props => props.theme.color[color];
export const getFont = font => props => props.theme.font[font];
