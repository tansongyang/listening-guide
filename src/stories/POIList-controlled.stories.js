import React, { Component } from 'react';
import glamorous from 'glamorous';
import POIList from '../components/POIList';
import { normalizePiece } from '../data/normalize';
import p from './data/sibelius.json';

const sibelius = normalizePiece(p);

class POIListStory extends Component {
  state = {
    index: 0,
  };

  indexRef = index => {
    this.index = index;
  };

  controllerRef = controller => {
    this.controller = controller;
  };

  handleIndexChange = index => {
    this.setState({ index });
  };

  handleScrollClick = () => {
    const index = +this.index.value;
    this.controller.scrollToIndex(index);
    this.handleIndexChange(index);
  };

  render() {
    return (
      <Container>
        <POIListContainer>
          <POIList
            controllerRef={this.controllerRef}
            index={this.state.index}
            onIndexChange={this.handleIndexChange}
            pois={pois}
          />
        </POIListContainer>
        <div>
          <input ref={this.indexRef} type="number" defaultValue={0} />
          <button onClick={this.handleScrollClick}>
            Scroll to and select index
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
