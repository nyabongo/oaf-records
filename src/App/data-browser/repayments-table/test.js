import React from 'react';
import { render } from '@testing-library/react';
import RepaymentsTable from '.';

const sampleRepayments = [
  {
    CustomerID: 2,
    SeasonID: 180,
    Date: '3/4/2016',
    Amount: 100,
  },
  {
    CustomerID: 3,
    SeasonID: 0,
    Date: '3/5/2016',
    Amount: 300,
  },
  {
    CustomerID: 4,
    SeasonID: 180,
    Date: '3/6/2016',
    Amount: 500,
  },
];
describe('RepaymentsTable', () => {
  let result;
  beforeAll(() => {
    localStorage.setItem('Repayments', JSON.stringify(sampleRepayments));
  });
  beforeEach(() => {
    result = render(<RepaymentsTable />);
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
  it('should have a Date column', () => {
    expect(result.getByText('Date')).toBeInTheDocument();
  });
  it('should have an Amount column', () => {
    expect(result.getByText('Amount')).toBeInTheDocument();
  });
  sampleRepayments.forEach(({
    CustomerID, SeasonID, Date: date, Amount,
  }, i) => {
    describe(`Row : ${i}`, () => {
      let row;
      beforeEach(() => {
        row = result.getByTestId(`row-${i}`);
      });

      it('should show the Customer ID', () => {
        const cell = row.children[0];
        expect(cell.innerHTML).toEqual(`${CustomerID}`);
      });
      it('should show the Season ID', () => {
        const cell = row.children[1];
        expect(cell.innerHTML).toEqual(`${SeasonID}`);
      });
      it('should show the Date', () => {
        const cell = row.children[2];
        expect(cell.innerHTML).toEqual(`${date}`);
      });
      it('should show the Amount', () => {
        const cell = row.children[3];
        expect(cell.innerHTML).toEqual(`${Amount}`);
      });
    });
  });
});
