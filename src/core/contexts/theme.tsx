import { createContext, useContext, useState } from 'react';
import { themeType } from '../types/themes';

interface contextInterface {
  theme: themeType;
  setTheme: (user: themeType) => void;
}

const ThemeContext = createContext({} as contextInterface);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState<themeType>('GREEN');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      'useThemeContext must be used inside a `ThemeContextProvider`'
    );

  return context;
}
