import getOutstandingSeason from '.';

const withOutstanding = {
  "CustomerID": 1,
  "SeasonID": 120,
  "Credit": 8000,
  "TotalRepaid": 7900
};
const allPaidUp = {
  "CustomerID": 2,
  "SeasonID": 120,
  "Credit": 900,
  "TotalRepaid": 900
};
const paidTooMuch = {
  "CustomerID": 3,
  "SeasonID": 120,
  "Credit": 900,
  "TotalRepaid": 999
};
const mockCustomerSummaries = [
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
  withOutstanding,
  {
    "CustomerID": 1,
    "SeasonID": 130,
    "Credit": 8000,
    "TotalRepaid": 7400
  },
  allPaidUp,
  paidTooMuch,
]

describe('getOutstandingSeason', () => {
  beforeAll(() => {
    localStorage.setItem('CustomerSummaries', JSON.stringify(mockCustomerSummaries))
  });
  it('should be a function', () => {
    expect(getOutstandingSeason).toBeInstanceOf(Function);
  });
  describe('with an outstanding amount', () => {
    it('should return the season ID of the earliest season with an outstanding payment', () => {
      const { seasonID } = getOutstandingSeason(1);
      expect(seasonID).toEqual(withOutstanding.SeasonID);
    })
    it('should return the outstanding amount of the earliest season with an outstanding payment', () => {
      const { outstandingAmount } = getOutstandingSeason(withOutstanding.CustomerID);
      expect(outstandingAmount).toEqual(withOutstanding.Credit - withOutstanding.TotalRepaid);
    })
  });
  describe('with no outstanding amount', () => {
    it('should return the last entry\'s seasonID', () => {
      const { seasonID } = getOutstandingSeason(allPaidUp.CustomerID)
      expect(seasonID).toEqual(allPaidUp.SeasonID);
    });
    it('should return the outstanding amount as zero', () => {
      const { outstandingAmount } = getOutstandingSeason(allPaidUp.CustomerID)
      expect(outstandingAmount).toEqual(0);
    });
  });
  describe('with excess payment', () => {
    it('should return the last entry\'s seasonID', () => {
      const { seasonID } = getOutstandingSeason(paidTooMuch.CustomerID)
      expect(seasonID).toEqual(paidTooMuch.SeasonID);
    });
    it('should return the excess amount as a negative outstanding balance', () => {
      const { outstandingAmount } = getOutstandingSeason(paidTooMuch.CustomerID)
      expect(outstandingAmount).toEqual(paidTooMuch.Credit - paidTooMuch.TotalRepaid);
    });
  });
});