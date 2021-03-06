import React, { Component } from 'react';
import glamorous from 'glamorous';
import POIList from '../components/POIList';
import { normalizePiece } from '../data/normalize';
import p from './data/sibelius.json';

const sibelius = normalizePiece(p);

class POIListStory extends Component {
  secondRef = second => {
    this.second = second;
  };

  controllerRef = controller => {
    this.controller = controller;
  };

  handleScrollClick = () => {
    this.controller.scrollToSecond(this.second.value);
  };

  render() {
    return (
      <Container>
        <POIListContainer>
          <POIList controllerRef={this.controllerRef} pois={pois} />
        </POIListContainer>
        <div>
          <input ref={this.secondRef} type="number" defaultValue={0} />
          <button onClick={this.handleScrollClick}>
            Scroll to second, no select
          </button>
        </div>
      </Container>
    );
  }
}

export default POIListStory;

const pois = sibelius.analysis.filter(a => a.type === 'poi');

const Container = glamorous.div({
  width: '32rem',
  height: '16rem',
  display: 'flex',
  flexDirection: 'column',
});

const POIListContainer = glamorous.div({
  flex: '1',
});
