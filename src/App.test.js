import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<div data-testid='App'/>);
  const linkElement = getByTestId('App');
  expect(linkElement).toBeInTheDocument();
});
