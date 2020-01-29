import React from 'react';
import { render } from '@testing-library/react';
import CustomerSummaryTable from '.';

const sampleSummary = [
  {
    "CustomerID": 1,
    "SeasonID": 110,
    "Credit": 7900,
    "TotalRepaid": 7900
  },
  {
    "CustomerID": 2,
    "SeasonID": 110,
    "Credit": 7900,
    "TotalRepaid": 7900
  },
  {
    "CustomerID": 1,
    "SeasonID": 130,
    "Credit": 8000,
    "TotalRepaid": 7400
  },
]

describe('CustomerSummaryTable', () => {
  let result;
  beforeAll(() => {
    localStorage.setItem('CustomerSummaries', JSON.stringify(sampleSummary));
  });
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
  sampleSummary.forEach(({ CustomerID, SeasonID, TotalRepaid, Credit }, i) => {
    describe('Row : ' + i, () => {
      let row
      beforeEach(() => {
        row = result.getByTestId(`row-${i}`)
      });

      it('should show the Customer ID', () => {
        const cell = row.children[0];
        expect(cell.innerHTML).toEqual(`${CustomerID}`);
      });
      it('should show the Season ID', () => {
        const cell = row.children[1];
        expect(cell.innerHTML).toEqual(`${SeasonID}`);
      });
      it('should show the Total Repaid', () => {
        const cell = row.children[2];
        expect(cell.innerHTML).toEqual(`${TotalRepaid}`);
      });
      it('should show the Credit', () => {
        const cell = row.children[3];
        expect(cell.innerHTML).toEqual(`${Credit}`);
      });
    });
  })
});
