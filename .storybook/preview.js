import React from 'react';
import { GlobalStyle } from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

const withGlobalStyles = (Story) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Story />
    </React.Fragment>
  );
};
export const decorators = [withGlobalStyles];
