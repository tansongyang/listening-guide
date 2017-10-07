import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { secondsToString } from '../format/time';
import theme, { themeText } from './theme';

class POI extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    start: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { props } = this;
    return (
      <Container active={props.active} onClick={props.onClick}>
        <div>
          <span>{props.title}</span>
        </div>
        <div>
          <Start>{secondsToString(props.start)}</Start>
        </div>
      </Container>
    );
  }
}

export default POI;

const Container = glamorous.button(
  {
    boxSizing: 'border-box',
    border: theme.main.border,
    borderRadius: theme.poi.borderRadius,
    padding: '0.5rem 1rem',
    fontSize: '1.4rem',
    cursor: 'pointer',
    textAlign: 'left',
    ...themeText(theme.main),
  },
  ({ active }) => {
    if (active) {
      return {
        backgroundColor: theme.poi.activeBackgroundColor,
        fontWeight: 'bold',
      };
    }
    return {
      boxShadow: theme.poi.boxShadow,
      ':hover': {
        backgroundColor: theme.poi.hoverBackgroundColor,
      },
    };
  }
);

const Start = glamorous.div({
  fontSize: '1.2rem',
});
