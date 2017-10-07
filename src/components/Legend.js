import React, { PureComponent } from 'react';
import glamorous from 'glamorous';
import strings from '../strings';

const icons = {
  legendT: 'T',
  legendM: 'M',
  legendT1A: 'T1A',
  legendT1AB: 'T1AB',
  legendStatement: '🎵',
  legendDevelopment: '🎶',
  legendS: '🎼',
  legendRecap: '🔄',
  legendReaction: '😶🖐',
};

class Legend extends PureComponent {
  renderIconWithInfo(key) {
    return (
      <li key={key}>
        <Icon role="img" aria-labelledby={key}>
          {icons[key]}:{' '}
        </Icon>
        <span id={key}>{strings[key]}</span>
      </li>
    );
  }

  render() {
    const lis = Object.keys(icons).map(this.renderIconWithInfo);
    return (
      <Container>
        <span>{strings.legendTitle}</span>
        <List>{lis}</List>
        <Disclaimer>
          <summary>{strings.legendDisclaimerSummary}</summary>
          <p>{strings.legendDisclaimer}</p>
        </Disclaimer>
      </Container>
    );
  }
}

export default Legend;

const Container = glamorous.div({
  padding: '0 1rem',
});

const Icon = glamorous.span({
  fontWeight: 'bold',
});

const List = glamorous.ul({
  fontSize: '1.2rem',
  '& > li': {
    margin: '1rem',
  },
});

const Disclaimer = glamorous.details({
  fontSize: '1.2rem',
});
