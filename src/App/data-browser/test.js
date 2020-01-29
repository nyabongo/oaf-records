import React from 'react';
import { render, fireEvent, } from '@testing-library/react';
import DataBrowser from '.';

jest.mock('./customer-summary-table',
  () => () => <div data-testid="customer-summary-table" ></div>)

jest.mock('./repayments-table',
  () => () => <div data-testid="repayments-table" ></div>)

describe('DataBrowser', () => {
  let result;
  beforeEach(() => {
    result = render(<DataBrowser />);
  });
  it('should show the customer summary table when the customer summary is clicked', () => {
    fireEvent.click(result.getByText('Customer Summary'));
    expect(result.getByTestId('customer-summary-table')).toBeInTheDocument()
  });
  it('should show the repayments table when the repayments is clicked', () => {
    fireEvent.click(result.getByText('Repayments'));
    expect(result.getByTestId('repayments-table')).toBeInTheDocument()
  });
});
