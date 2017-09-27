import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous, { ThemeProvider } from 'glamorous';
import { secondsToString } from '../format/time';
import theme, { themeText } from './theme';

class POI extends Component {
  static propTypes = {
    accent: PropTypes.string.isRequired,
    active: PropTypes.bool,
    start: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { props } = this;
    const A = Accent(props.accent);
    const C = Container(props.active || false);
    return (
      <ThemeProvider theme={theme}>
        <C>
          <div>
            {props.accent && (
              <A role="img" aria-label="accent">
                ●
              </A>
            )}
            <span>{props.title}</span>
          </div>
          <div>
            <Start>{secondsToString(props.start)}</Start>
          </div>
        </C>
      </ThemeProvider>
    );
  }
}

export default POI;

const Container = active =>
  glamorous.div(
    {
      padding: '0.5rem 1rem',
      fontSize: '1.4rem',
      fontWeight: active ? 'bold' : 'inherit',
    },
    ({ theme }) => ({
      ...themeText,
      backgroundColor: active
        ? theme.poi.activeBackgroundColor
        : theme.main.backgroundColor,
    })
  );

const Accent = color =>
  glamorous.span({
    color,
    marginRight: '0.5rem',
  });

const Start = glamorous.div({
  fontSize: '1.2rem',
});
