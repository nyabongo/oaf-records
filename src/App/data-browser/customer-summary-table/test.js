import React from 'react';
import { render } from '@testing-library/react';
import CustomerSummaryTable from '.';

describe('CustomerSummaryTable', () => {
  let result;
  beforeEach(() => {
    result = render(<CustomerSummaryTable />);
  });
  it('should render without crashing', () => {
    expect(result).toBeTruthy();
  });
});
