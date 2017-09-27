import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { findIndexByStart } from '../data/poi';
import List from './List';
import POI from './POI';

class POIList extends Component {
  static propTypes = {
    /**
     * ({
     *   scrollToSecond(second: number): void,
     * }) => void
     */
    controllerRef: PropTypes.func,
    /**
     * If specified, this becomes a controlled component.
     */
    index: PropTypes.number,
    /**
     * (index: number) => void
     */
    onChange: PropTypes.func,
    /**
     * Difference with onChange is that this is only called
     * when a user takes direct action on a POI.
     * (index: number) => void
     */
    onSelect: PropTypes.func,
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
    if (!isControlled(this)) {
      this.setState({ activeIndex });
    }

    const { props } = this;
    props.onSelect && props.onSelect(activeIndex);
    props.onChange && props.onChange(activeIndex);
  };

  renderPOI = (poi, index) => {
    const active = getActiveIndex(this) === index;
    const B = POIButton(active);
    return (
      <B data-index={index} onClick={this.handlePOIClick}>
        <POI
          accent={poi.accent}
          active={active}
          title={poi.title}
          start={poi.start}
        />
      </B>
    );
  };

  render() {
    const { props } = this;
    return (
      <List
        controllerRef={this.ref}
        items={props.pois}
        renderItem={this.renderPOI}
      />
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
    scrollToSecond(second) {
      const { props } = component;
      const activeIndex = findIndexByStart(props.pois, second);
      const activeIndexChanged = getActiveIndex(component) !== activeIndex;
      if (isControlled(component) && activeIndexChanged) {
        props.onChange(activeIndex);
      } else {
        component.setState({ activeIndex }, () => {
          component.listController.scrollToIndex(activeIndex);
          props.onChange && props.onChange(activeIndex);
        });
      }
    },
  };
}

const POIButton = active =>
  glamorous.button({
    display: 'block',
    width: '100%',
    margin: 0,
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    textAlign: 'start',
    cursor: 'pointer',
  });
