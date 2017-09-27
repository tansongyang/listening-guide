import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import glamorous from 'glamorous';
import POIList from '../components/POIList';
import sibelius from './data/sibelius.json';

class POIListStory extends Component {
  render() {
    return (
      <Container>
        <POIListContainer>
          <POIList
            controllerRef={this.controllerRef}
            onSelect={action('select')}
            pois={pois}
          />
        </POIListContainer>
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
