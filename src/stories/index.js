import 'babel-polyfill';
import React from 'react';

import { storiesOf } from '@storybook/react';

import List from './List.stories';
import POI from './POI.stories';
import POIListControlled from './POIList-controlled.stories';
import POIListUncontrolled from './POIList-uncontrolled.stories';
import Video from './Video.stories';
import Viewer from './Viewer.stories';

storiesOf('List', module).add('main', () => <List />);

storiesOf('POI', module).add('main', () => <POI />);

storiesOf('POIList', module)
  .add('controlled', () => <POIListControlled />)
  .add('uncontrolled', () => <POIListUncontrolled />);

storiesOf('Video', module).add('main', () => <Video />);

storiesOf('Viewer', module).add('main', () => <Viewer />);
