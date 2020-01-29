import React from 'react';
import { render } from '@testing-library/react';
import App from '.';

// jest.mock('@material-ui/core/Button', () => (p) => <button {...p} />)

describe('App', () => {
  let result;
  beforeEach(() => {
    result = render(<App />);
  });

  test('renders Records title', () => {
    const titleElement = result.getByText(/Records/i);
    expect(titleElement).toBeInTheDocument();
  });
  describe('Load Data button', () => {
    let button;
    beforeEach(() => {
      button = result.getByText('Load Data');
    });
    it('should exist', () => {
      expect(button).toBeInTheDocument();
    });
  });
  describe('Upload Payments button', () => {
    let button;
    beforeEach(() => {
      button = result.getByText('Upload Payments');
    });
    it('should exist', () => {
      expect(button).toBeInTheDocument();
    });
  });
  describe('Reset button', () => {
    let button;
    beforeEach(() => {
      button = result.getByText('Clear Data');
    });
    it('should exist', () => {
      expect(button).toBeInTheDocument();
    });
  });

});
