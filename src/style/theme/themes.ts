const lightTheme = {
  main: {
    background: '#F5F5F5',
    text: '#000000',
  },
  sidebar: {
    background: '#143644',
    text: '#FFFFFF',
    text_selected: '#06F4FE',
  },
  data: {
    background: '#FFFFFF',
    text: '#000000',
  },
};

const darkTheme: Theme = {
  main: {
    background: '#F5F5F5',
    text: '#000000',
  },
  sidebar: {
    background: '#143644',
    text: '#FFFFFF',
    text_selected: '#06F4FE',
  },
  data: {
    background: '#FFFFFF',
    text: '#000000',
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
