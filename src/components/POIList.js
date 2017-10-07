import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { findIndexByStart } from '../data/poi';
import List from './List';
import POI from './POI';
import theme from './theme';

class POIList extends Component {
  static propTypes = {
    /**
     * ({
     *   scrollToSecond(second: number): void,
     * }) => void
     */
    controllerRef: PropTypes.func,
    /**
     * The index to highlight.
     * If specified, this becomes a controlled component.
     */
    index: PropTypes.number,
    /**
     * (index: number) => void
     */
    onIndexChange: PropTypes.func,
    /**
     * ({
     *   byUser: boolean,
     * }) => void
     */
    onScroll: PropTypes.func,
    pois: PropTypes.array.isRequired,
  };

  state = {
    activeIndex: null,
  };

  ref = listController => {
    this.listController = listController;
    const { controllerRef } = this.props;
    controllerRef && controllerRef(makeController(this));
  };

  handlePOIClick = e => {
    const activeIndex = +e.currentTarget.dataset.index;
    const { props } = this;
    if (activeIndex !== getActiveIndex(this)) {
      props.onIndexChange && props.onIndexChange(activeIndex);
      if (!isControlled(this)) {
        this.setState({ activeIndex });
      }
    }
  };

  renderPOI = (poi, index) => {
    const active = getActiveIndex(this) === index;
    return (
      <POIContainer data-index={index} onClick={this.handlePOIClick}>
        <POI
          accent={poi.accent}
          active={active}
          title={poi.title}
          start={poi.start}
        />
      </POIContainer>
    );
  };

  render() {
    const { props } = this;
    return (
      <Container>
        <List
          controllerRef={this.ref}
          items={props.pois}
          onScroll={props.onScroll}
          renderItem={this.renderPOI}
        />
      </Container>
    );
  }
}

export default POIList;

function getActiveIndex(component) {
  return isControlled(component)
    ? component.props.index
    : component.state.activeIndex;
}

function isControlled(component) {
  return component.props.index != null;
}

function makeController(component) {
  return {
    scrollToIndex(index) {
      component.listController.scrollToIndex(index);
    },
    scrollToSecond(second) {
      const index = findIndexByStart(component.props.pois, second);
      component.listController.scrollToIndex(index);
    },
  };
}

const Container = glamorous.div({
  boxSizing: 'border-box',
  height: '100%',
  border: theme.main.border,
});

const POIContainer = glamorous.div({
  width: 'calc(100% - 1rem)',
  margin: '0.5rem',
  display: 'flex',
  '& > *': {
    flex: 1,
  },
});
