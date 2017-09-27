import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, { ThemeProvider } from 'glamorous';
import POIList from './POIList';
import theme, { themeText } from './theme';
import Video from './Video';

class Viewer extends Component {
  static propTypes = {
    pois: PropTypes.array.isRequired,
    src: PropTypes.string.isRequired,
  };

  state = {
    activeIndex: -1,
  };

  listControllerRef = controller => {
    this.listController = controller;
  };

  videoControllerRef = controller => {
    this.videoController = controller;
  };

  handleActiveIndexChange = activeIndex => {
    this.setState({ activeIndex });
  };

  handlePOISelect = index => {
    const poi = this.props.pois[index];
    this.videoController.seek(poi.start);
  };

  handleProgress = ({ elapsed }) => {
    this.listController.scrollToSecond(elapsed);
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
      <ThemeProvider theme={theme}>
        <Container>
          <Content>
            <Video
              controllerRef={this.videoControllerRef}
              onProgress={this.handleProgress}
              playing={true}
              src={props.src}
            />
            {poi && <Notes>{poi.notes}</Notes>}
          </Content>
          <ListContainer>
            <POIList
              controllerRef={this.listControllerRef}
              index={state.index}
              onChange={this.handleActiveIndexChange}
              onSelect={this.handlePOISelect}
              pois={props.pois}
            />
          </ListContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Viewer;

const Container = glamorous.div({
  ...themeText,
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1.4rem',
});

const Content = glamorous.div({
  width: '64rem',
});

const Notes = glamorous.p({
  height: '4rem',
  padding: '1rem 0',
  fontSize: '1.8rem',
});

const ListContainer = glamorous.div({
  width: '32rem',
});
