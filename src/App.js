import React, { Component } from 'react';
import glamorous from 'glamorous';
import Header from './components/Header';
import theme, { themeText } from './components/theme';
import Viewer from './stories/Viewer.stories';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main>
          <Viewer />
        </Main>
      </Container>
    );
  }
}

export default App;

const Container = glamorous.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  ...themeText(theme.main),
});

const Main = glamorous.main({
  flex: 1,
  position: 'relative',
});
