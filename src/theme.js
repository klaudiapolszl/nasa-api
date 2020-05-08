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

export const getColor = colorType => props => props.theme.color[colorType];
export const getFont = fontType => props => props.theme.font[fontType];
