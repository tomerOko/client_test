const lightTheme = {
  main_background: '#F5F5F5',
  main_background_text: '#000000',
  sidebar_background: '#143644',
  sidebar_background_text: '#FFFFFF',
  sidebar_background_text_selected: '#06F4FE',
  data_background: '#FFFFFF',
  data_background_text: '#000000',
};

const darkTheme: Theme = {
  main_background: '#F5F5F5',
  main_background_text: '#000000',
  sidebar_background: '#143644',
  sidebar_background_text: '#FFFFFF',
  sidebar_background_text_selected: '#06F4FE',
  data_background: '#FFFFFF',
  data_background_text: '#000000',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
