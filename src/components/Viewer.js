import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { findIndexByStart } from '../data/poi';
import strings from '../strings';
import Legend from './Legend';
import POIList from './POIList';
import theme from './theme';
import Video from './Video';

class Viewer extends Component {
  static propTypes = {
    pois: PropTypes.array.isRequired,
    src: PropTypes.string.isRequired,
  };

  state = {
    activeIndex: -1,
    autoScroll: true,
  };

  listControllerRef = controller => {
    this.listController = controller;
  };

  videoControllerRef = controller => {
    this.videoController = controller;
  };

  handleAutoScrollChange = e => {
    const autoScroll = e.currentTarget.checked;
    this.setState({ autoScroll });
    if (autoScroll) {
      this.listController.scrollToSecond(this.videoController.getElapsed());
    }
  };

  handlePOISelect = index => {
    const poi = this.props.pois[index];
    this.videoController.seek(poi.start);
    this.setState({ activeIndex: index, autoScroll: false });
  };

  handleProgress = ({ elapsed }) => {
    const activeIndex = findIndexByStart(this.props.pois, elapsed);
    if (activeIndex !== this.state.activeIndex) {
      this.setState({ activeIndex });
      if (this.state.autoScroll) {
        this.listController.scrollToIndex(activeIndex);
      }
    }
  };

  handleScroll = ({ byUser }) => {
    if (byUser && this.state.autoScroll) {
      this.setState({ autoScroll: false });
    }
  };

  componentDidMount() {
    // Always start from the beginning.
    this.setState({ activeIndex: 0 });
  }

  render() {
    const { props, state } = this;
    const { activeIndex } = state;
    const poi = activeIndex > -1 ? props.pois[activeIndex] : null;
    return (
      <Container>
        <LegendContainer>
          <Legend />
        </LegendContainer>
        <Content>
          <Video
            controllerRef={this.videoControllerRef}
            onProgress={this.handleProgress}
            playing={true}
            src={props.src}
          />
          <Notes>{poi && poi.notes}</Notes>
        </Content>
        <SideBar>
          <Label>
            <input
              type="checkbox"
              checked={state.autoScroll}
              onChange={this.handleAutoScrollChange}
            />
            {strings.autoScroll}
          </Label>
          <ListContainer>
            <POIList
              controllerRef={this.listControllerRef}
              index={state.activeIndex}
              onIndexChange={this.handlePOISelect}
              onScroll={this.handleScroll}
              pois={props.pois}
            />
          </ListContainer>
        </SideBar>
      </Container>
    );
  }
}

export default Viewer;

const Container = glamorous.div({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  fontSize: '1.4rem',
});

const LegendContainer = glamorous.div({
  width: '24rem',
});

const Content = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '64rem',
});

const Notes = glamorous.p({
  flex: 1,
  boxSizing: 'border-box',
  border: theme.main.border,
  padding: '1rem',
  fontSize: '2rem',
});

const Label = glamorous.label({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  height: '4rem',
  border: theme.main.border,
  paddingLeft: '0.5rem',
  fontSize: '1.2rem',
  cursor: 'pointer',
  '& > input': {
    cursor: 'pointer',
  },
});

const SideBar = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '24rem',
});

const ListContainer = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
