// Several colors based on https://github.com/ihodev/sublime-boxy/blob/0f6cc5f723d643822caa922dbebe28e9f891e623/sources/settings/specific/yesterday.json

const theme = {
  main: {
    backgroundColor: '#f7f7f7',
    border: '0.1rem solid #ddd',
    borderColor: '#ddd',
    color: '#262626',
    fontFamily: '"Open Sans", sans-serif',
  },
  header: {
    backgroundColor: '#262626',
    color: '#f7f7f7',
    fontFamily: '"Roboto", sans-serif',
  },
  poi: {
    activeBackgroundColor: '#ddd',
    borderRadius: '0.5rem',
    // http://materializecss.com/buttons.html
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
    hoverBackgroundColor: '#eee',
  },
};

export default theme;

export function themeText(theme) {
  return {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    fontFamily: theme.fontFamily,
  };
}
