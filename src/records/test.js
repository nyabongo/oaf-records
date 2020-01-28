import { addPayment } from '.';
import saveRepayment from './repayments/save-repayment';
import updateRepayment from './customer-summaries/update-repayment';

jest.mock('./repayments/save-repayment')
jest.mock('./customer-summaries/update-repayment')

const mockCustomerID = 42;
const mockDate = "8/1/2013";
const mockAmount = '990';


describe('records', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should have an add payment function', () => {
    expect(addPayment).toBeInstanceOf(Function);
  });
  describe('addPayment', () => {
    describe('with season specified', () => {
      it('should record a payment to the specified season', () => {
        const seasonID = 'seasonID'
        addPayment(mockCustomerID, mockDate, mockAmount, seasonID);
        expect(saveRepayment).toHaveBeenCalledWith(mockAmount, seasonID, mockCustomerID, mockDate);
        //TODO: is this really required
      });
      it('should update the customer summary record for that season', () => {
        const seasonID = 'seasonID'
        addPayment(mockCustomerID, mockDate, mockAmount, seasonID);
        expect(updateRepayment).toHaveBeenCalledWith(mockCustomerID, seasonID, mockAmount);
      });
    });
  });
});