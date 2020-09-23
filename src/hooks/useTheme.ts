import React from 'react';

const useTheme = () => {
  const theme = React.useRef('light');

  React.useLayoutEffect(() => {
    setTheme();
  }, []);

  const toggleTheme = () => {
    theme.current = theme.current === 'light' ? 'dark' : 'light';
    setTheme();
  };
  const setTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.current);
  };

  return toggleTheme;
};

export default useTheme;
