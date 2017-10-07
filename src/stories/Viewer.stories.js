import React, { Component } from 'react';
import glamorous from 'glamorous';
import Viewer from '../components/Viewer';
import { normalizePiece } from '../data/normalize';
import p from './data/sibelius.json';

const piece = normalizePiece(p);
const pois = piece.analysis.filter(a => a.type === 'poi');

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

const Title = glamorous.h2({
  padding: '1.6rem',
  fontSize: '3.2rem',
  textAlign: 'center',
});

const Container = glamorous.div({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  '& > *:last-child': {
    flex: 1,
  },
});
