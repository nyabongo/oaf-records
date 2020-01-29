import React from 'react';
import { render } from '@testing-library/react';
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
  it('should show the customer summary table', () => {
    expect(result.getByTestId('customer-summary-table')).toBeInTheDocument()
  });
  it('should show the repayments table', () => {
    expect(result.getByTestId('repayments-table')).toBeInTheDocument()    
  });
});
