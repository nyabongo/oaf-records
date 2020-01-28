import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

describe('App', () => {
  const { getByText } = render(<App />);
  
  test('renders Records title', () => {
    const titleElement = getByText(/Records/i);
    expect(titleElement).toBeInTheDocument();
  });
  
});
