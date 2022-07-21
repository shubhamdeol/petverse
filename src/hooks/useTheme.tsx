import React, {ReactNode} from 'react';

const ThemeContext = React.createContext({
  theme: {},
});

interface ITheme {}

interface IThemeHook {
  children?: ReactNode;
  theme?: ITheme;
}

export const ThemeProvider = ({children, theme = {}}: IThemeHook) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export default function useTheme(): ITheme {
  const {theme} = React.useContext(ThemeContext);
  return theme;
}
