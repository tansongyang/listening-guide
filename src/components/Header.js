import React, { Component } from 'react';
import glamorous from 'glamorous';
import strings from '../strings';
import theme, { themeText } from './theme';

class Header extends Component {
  render() {
    return (
      <Container>
        <H1>{strings.appName}</H1>
        <IconLink
          href={strings.aboutHref}
          target="_blank"
          title={strings.aboutTitle}
        >
          <span role="img" aria-label="about">
            {strings.aboutIcon}
          </span>
        </IconLink>
      </Container>
    );
  }
}

export default Header;

const Container = glamorous.header({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  fontSize: '2rem',
  ...themeText(theme.header),
});

const H1 = glamorous.h1({
  flex: 1,
});

const IconLink = glamorous.a({
  display: 'inline-block',
  width: '3rem',
  height: '3rem',
  marginLeft: '1rem',
  textAlign: 'center',
  textDecoration: 'none',
  ...themeText(theme.header),
  ':hover': {
    color: theme.main.borderColor,
  },
});
