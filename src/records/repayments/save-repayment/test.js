import saveRepayment from '.';
const amount = 400;
const seasonID = 2010;
const customerID = 42;
const date = '10/8/2012';
const parentID = 3;

describe('saveRepayment', () => {
  beforeEach(() => {
    localStorage.clear()
  });
  it('should be a function', () => {
    expect(saveRepayment).toBeInstanceOf(Function);
  });
  it('should add an entry to the repayments table', () => {
    saveRepayment(amount, seasonID, customerID, date, parentID);
    const repayments = JSON.parse(localStorage.getItem('Repayments'));
    expect(repayments).toContainEqual({
      RepaymentID: 1,
      Amount: amount,
      SeasonID: seasonID,
      CustomerID: customerID,
      Date: date,
      ParentID: parentID
    });
  });
  it('should mark ParentID as null if its not given', () => {
    saveRepayment(amount, seasonID, customerID, date);
    const repayments = JSON.parse(localStorage.getItem('Repayments'));
    expect(repayments).toContainEqual({
      RepaymentID: 1,
      Amount: amount,
      SeasonID: seasonID,
      CustomerID: customerID,
      Date: date,
      ParentID: null
    });
  });
  it('should return the repaymentsID', () => {
    const result = saveRepayment(amount, seasonID, customerID, date);
    const repayments = JSON.parse(localStorage.getItem('Repayments'));
    expect(result).toEqual(repayments.length);
  });
});