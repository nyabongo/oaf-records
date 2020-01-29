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
  it('Should have a Customer ID column', () => {
    expect(result.getByText('Customer ID')).toBeInTheDocument();
  });
  it('should have a Season ID column', () => {
    expect(result.getByText('Season ID')).toBeInTheDocument();
  });
  it('should have a Total Repaid column', () => {
    expect(result.getByText('Total Repaid')).toBeInTheDocument();
  });
  it('should have a Total Credit column', () => {
    expect(result.getByText('Total Credit')).toBeInTheDocument();
  });
});
