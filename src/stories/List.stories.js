import React, { Component } from 'react';
import glamorous from 'glamorous';
import range from 'lodash/range';
import List from '../components/List';

class ListStory extends Component {
  indexRef = index => {
    this.index = index;
  };

  controllerRef = controller => {
    this.controller = controller;
  };

  handleScrollClick = () => {
    this.controller.scrollToIndex(this.index.value);
  };

  renderItem = item => {
    return <span>{item}</span>;
  };

  render() {
    return (
      <Container>
        <ListContainer>
          <List
            controllerRef={this.controllerRef}
            items={range(0, 100)}
            renderItem={this.renderItem}
          />
        </ListContainer>
        <div>
          <input ref={this.indexRef} type="number" defaultValue={0} />
          <button onClick={this.handleScrollClick}>Scroll to index</button>
        </div>
      </Container>
    );
  }
}

export default ListStory;

const Container = glamorous.div({
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
});

const ListContainer = glamorous.div({
  flex: '1',
});
