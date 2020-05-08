import React from 'react';
import ReactDOM from 'react-dom';
import Polaroid from './components/Polaroid/Polaroid.js'
import { theme, getColor, getFont } from './theme.js';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const StyledLoading = styled.div`
  font-size: 24px;
  font-family: ${getFont('fontFamily')};
  color: ${getColor('backgroundFirst')};
`;
const MainTitle = styled.h1`
  color: ${getColor('white')};
  text-align: center;
  text-shadow: 3px 3px 0 rgba(${getColor('white')}, .3);
  font-size: 40px;
`;
const Text = styled.p`
  font-size: 26px;
  text-align: center;
  color: ${getColor('white')};
`;
const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, ${getColor('backgroundFirst')}, ${getColor('backgroundSec')});
    font-family: ${getFont('fontFamily')};
    padding: 20px 0px;
  }
`

class PicOfTheDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: '',
      explanation: '',
      date: '',
      copyright: '',
      img: '',
      mediaType: '',
      video: ''
    }
  }

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=NMnY548zyrPfYSxvM1mATNzhwYbOqgEkFiwV422Z`)
      .then(r => r.json())
      .then(ans => {
        this.setState({
          title: ans.title,
          explanation: ans.explanation,
          date: ans.date,
          copyright: ans.copyright,
          img: ans.hdurl,
          loading: false,
          mediaType: ans.media_type,
          video: ans.url
        })
    });
  }

  render() {
    return (
      <ThemeProvider theme={ theme }>
        { this.state.loading
          ? (<StyledLoading>
              Please, wait a moment...
            </StyledLoading>)
          : (<div>
              <GlobalStyle />
              <MainTitle>
                Astronomy Picture of the Day
              </MainTitle>
              <Text>
                { this.state.title }
              </Text>
              <Text>
                { this.state.date }
              </Text>
              { (this.state.copyright != null) ? <Text>Copyright: { this.state.copyright }</Text> : "" }
              <Polaroid mediaType={ this.state.mediaType } title={ this.state.title } explanation={ this.state.explanation } video={ this.state.video } img={ this.state.img } />
            </div>)
        }
      </ThemeProvider>
    )
  }
}

ReactDOM.render(<PicOfTheDay />, document.getElementById("root"));
