import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BezierEasing from 'bezier-easing';
import { Scrollbars } from 'react-custom-scrollbars';

// You must render this component in a container with defined height,
// otherwise it will not appear.
class List extends Component {
  static propTypes = {
    /**
     * ({
     *   scrollTo(index: number): void, // Corresponds to `items`
     * }) => void
     */
    controllerRef: PropTypes.func,
    items: PropTypes.array.isRequired,
    /**
     * ({
     *   byUser: boolean,
     * }) => void
     */
    onScroll: PropTypes.func,
    /**
     * (item: object, index: number) => void
     */
    renderItem: PropTypes.func.isRequired,
    style: PropTypes.object,
  };

  apiScrolling = false;
  itemRefsByIndex = {};

  ref = scrollbars => {
    this.scrollbars = scrollbars;
    const { controllerRef } = this.props;
    controllerRef && controllerRef(makeController(this));
  };

  handleScroll = () => {
    const { onScroll } = this.props;
    onScroll && onScroll({ byUser: !this.apiScrolling });
  };

  renderItem = (item, index) => {
    return (
      <li key={index} ref={ref => (this.itemRefsByIndex[index] = ref)}>
        {this.props.renderItem(item, index)}
      </li>
    );
  };

  renderList = () => {
    return <ul>{this.props.items.map(this.renderItem)}</ul>;
  };

  render() {
    return (
      <Scrollbars
        ref={this.ref}
        onScroll={this.handleScroll}
        style={this.props.style || undefined}
      >
        {this.renderList()}
      </Scrollbars>
    );
  }
}

export default List;

function makeController(component) {
  return {
    scrollToIndex(index) {
      const { itemRefsByIndex, scrollbars } = component;

      const itemRef = itemRefsByIndex[index];
      const node = ReactDOM.findDOMNode(itemRef);

      const start = scrollbars.getScrollTop();
      const end = node.offsetTop;
      const diff = end - start;
      if (diff !== 0) {
        component.apiScrolling = true;
        // Ease: http://cubic-bezier.com/#.25,.1,.25,1
        const easing = BezierEasing(0.25, 0.1, 0.1, 1);
        const duration = 300; // milliseconds
        const interval = 10; // milliseconds
        let iterations = 0;
        const intervalId = setInterval(() => {
          iterations++;
          const elapsed = iterations * interval;
          const y = easing(elapsed / duration);
          const scrollTop = start + y * diff;
          const arrived = diff < 0 ? scrollTop <= end : scrollTop >= end;
          if (arrived) {
            scrollbars.scrollTop(end);
            clearInterval(intervalId);
            // Make sure the last scroll listener runs with the right state.
            setTimeout(() => {
              component.apiScrolling = false;
            }, 10);
          } else {
            scrollbars.scrollTop(scrollTop);
          }
        }, interval);
      }
    },
  };
}
