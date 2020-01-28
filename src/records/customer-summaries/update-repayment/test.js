import updateRepaymentSummary from ".";
import { fetchAll } from "../fetch-summaries";

const customer = 2;
const season = 110;
const amount = 200
const mockCustomerSummaries = [
  {
    "CustomerID": 1,
    "SeasonID": 110,
    "Credit": 7900,
    "TotalRepaid": 7900
  },
  {
    "CustomerID": customer,
    "SeasonID": season,
    "Credit": 7900,
    "TotalRepaid": 6700
  },
  {
    "CustomerID": 1,
    "SeasonID": 130,
    "Credit": 8000,
    "TotalRepaid": 7400
  },
  {
    "CustomerID": customer,
    "SeasonID": 130,
    "Credit": 7900,
    "TotalRepaid": 7900
  },
]
describe('updateRepaymentSummary', () => {
  beforeAll(() => {
    localStorage.setItem('CustomerSummaries', JSON.stringify(mockCustomerSummaries))
  });
  it('should be a function', () => {
    expect(updateRepaymentSummary).toBeInstanceOf(Function);
  });
  it('should increment the TotalRepaid amount in the entry matching the customerID and seasonID', () => {
    updateRepaymentSummary(customer, season, amount);
    const summaries = fetchAll();
    expect(summaries[1]).toEqual({
      CustomerID: customer,
      SeasonID: season,
      Credit: mockCustomerSummaries[1].Credit,
      TotalRepaid: mockCustomerSummaries[1].TotalRepaid + amount,
    });
  });
  describe.skip('Edge cases', () => {
    it('should do something when no entry is found to update', () => {
      jest.fail('Not implemented yet')
    });
  });
});