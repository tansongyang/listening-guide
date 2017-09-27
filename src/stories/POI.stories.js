import React, { Component } from 'react';
import find from 'lodash/find';
import POI from '../components/POI';
import sibelius from './data/sibelius.json';

class POIStory extends Component {
  render() {
    const poi = find(sibelius.analysis, a => a.title === 'Theme 1');
    return (
      <div>
        <POI accent={poi.accent} title={poi.title} start={poi.start} />
        <POI accent="" title="No accent" start={1} />
        <POI
          accent={poi.accent}
          active={true}
          title={poi.title + ' (Active)'}
          start={poi.start}
        />
      </div>
    );
  }
}

export default POIStory;
