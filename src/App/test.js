import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { loadData, uploadPayments, clearData } from './sample-data';
import App from '.';

jest.mock('./sample-data');
jest.mock('./data-browser', () => () => <div data-testid="data-browser" />);

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
    it('should call the load samples function when clicked', () => {
      fireEvent.click(button);
      expect(loadData).toHaveBeenCalled();
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
    it('should call the uploadPayments function when clicked', () => {
      fireEvent.click(button);
      expect(uploadPayments).toHaveBeenCalled();
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
    it('should call the reset DB function when clicked', () => {
      fireEvent.click(button);
      expect(clearData).toHaveBeenCalled();
    });
  });

  describe('DataBrowser', () => {
    let dataBrowser;
    beforeEach(() => {
      dataBrowser = result.getByTestId('data-browser');
    });
    it('should be in the document', () => {
      expect(dataBrowser).toBeInTheDocument();
    });
  });
});
