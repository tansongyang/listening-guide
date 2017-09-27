import React, { Component } from 'react';
import glamorous from 'glamorous';
import { themeText } from '../components/theme';
import Viewer from '../components/Viewer';
import piece from './data/sibelius.json';

class ViewerStory extends Component {
  render() {
    return (
      <Container>
        <Title>{`${piece.composer.last}: ${piece.title}`}</Title>
        <Viewer pois={pois} src={piece.uri} />
      </Container>
    );
  }
}

export default ViewerStory;

const pois = piece.analysis.filter(a => a.type === 'poi');

const Title = glamorous.h1({
  ...themeText,
  padding: '1.6rem',
  fontSize: '3.2rem',
  fontStyle: 'italic',
  textAlign: 'center',
});

const Container = glamorous.div({
  width: '100vw',
  height: '100vh',
});
