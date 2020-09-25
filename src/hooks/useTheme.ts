import React from 'react';
import useLocalStorage from './useLocalStorage';

const useTheme = () => {
  //@ts-ignore
  const [theme, updateTheme] = useLocalStorage('theme', 'dark');

  React.useLayoutEffect(() => {
    //@ts-ignore
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    updateTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export default useTheme;
