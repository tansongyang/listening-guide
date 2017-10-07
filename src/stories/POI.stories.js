import React, { Component } from 'react';
import POI from '../components/POI';

class POIStory extends Component {
  render() {
    const poi = {
      type: 'poi',
      title: 'Theme 1',
      start: 41,
      notes: 'Note the shape of the phrases: long-short-long.',
    };
    return (
      <div>
        <POI title={poi.title} start={poi.start} />
        <POI title="No accent" start={1} />
        <POI active={true} title={poi.title + ' (Active)'} start={poi.start} />
      </div>
    );
  }
}

export default POIStory;
