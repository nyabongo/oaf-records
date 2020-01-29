import React from 'react';
import { render } from '@testing-library/react';
import DataBrowser from '.';

jest.mock('./customer-summary-table',
  () => () => <div data-testid="customer-summary-table" ></div>)

describe('DataBrowser', () => {
  let result;
  beforeEach(() => {
    result = render(<DataBrowser />);
  });
  it('should render the customer summary table', () => {
    expect(result.getByTestId('customer-summary-table')).toBeInTheDocument()
  });
});
