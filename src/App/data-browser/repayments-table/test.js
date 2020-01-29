import React from 'react';
import { render } from '@testing-library/react';
import RepaymentsTable from '.';

describe('RepaymentsTable', () => {
  let result;
  beforeEach(() => {
    result = render(<RepaymentsTable />);
  });
  it('should render without crashing', () => {
    expect(result).toBeTruthy();
  });
});
