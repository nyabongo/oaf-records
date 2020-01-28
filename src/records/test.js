import { addPayment } from '.';
import saveRepayment from './repayments/save-repayment';
import updateRepayment from './customer-summaries/update-repayment';
import getOutstandingSeason from './customer-summaries/get-outstanding-season';

jest.mock('./repayments/save-repayment')
jest.mock('./customer-summaries/update-repayment')
jest.mock('./customer-summaries/get-outstanding-season')

const mockCustomerID = 42;
const mockDate = "8/1/2013";
const mockAmount = '990';


describe('records', () => {
  beforeEach(() => {
    jest.resetAllMocks();
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
    describe('when overpaid for all seasons', () => {
      const outStandingSeason = { seasonID: 200, outstandingAmount: 0 };
      beforeEach(() => {
        getOutstandingSeason.mockReturnValue(outStandingSeason)
      });
      it('should fetch the outstanding season', () => {
        addPayment(mockCustomerID, mockDate, mockAmount);
        expect(getOutstandingSeason).toHaveBeenCalledWith(mockCustomerID);
      });
      it('should record a payment to the returned outstanding season', () => {
        addPayment(mockCustomerID, mockDate, mockAmount);
        expect(saveRepayment).toHaveBeenCalledWith(mockAmount,
          outStandingSeason.seasonID, mockCustomerID, mockDate);
        //TODO: is this really required        
      });
      it('should update the customer summary record for the returned season', () => {
        addPayment(mockCustomerID, mockDate, mockAmount);
        expect(updateRepayment).toHaveBeenCalledWith(mockCustomerID, outStandingSeason.seasonID,
          mockAmount);
      });
    });
  });
  describe('When more than enough for a single season', () => {
    const fakeRepaymentID = 1999;
    beforeEach(() => {
      getOutstandingSeason.mockReturnValueOnce({ seasonID: 2011, outstandingAmount: 20 })
      getOutstandingSeason.mockReturnValueOnce({ seasonID: 2012, outstandingAmount: 90 })
      getOutstandingSeason.mockReturnValueOnce({ seasonID: 2013, outstandingAmount: 0 })
      saveRepayment.mockReturnValueOnce(fakeRepaymentID)
    });
    it('should record the full payment to the earliest outstanding season', () => {
      addPayment(mockCustomerID, mockDate, 60);
      expect(saveRepayment).toHaveBeenCalledWith(60, 2011, mockCustomerID, mockDate);
    });
    it('should record an adjustment payment to the earliest outstanding season so that only the owed amount is paid', () => {
      addPayment(mockCustomerID, mockDate, 60);
      expect(saveRepayment).toHaveBeenCalledWith(20 - 60, 2011, mockCustomerID, mockDate, fakeRepaymentID);
    });
    it('should record a payment with the balance to the next outstanding season', () => {
      addPayment(mockCustomerID, mockDate, 60);
      expect(saveRepayment).toHaveBeenCalledWith(60 - 20, 2012, mockCustomerID, mockDate, fakeRepaymentID);
    });
    it('should save only three payment record', () => {
      addPayment(mockCustomerID, mockDate, 60);
      expect(saveRepayment).toHaveBeenCalledTimes(3);
    });
  });
  describe('For Exact payment', () => {
    beforeEach(() => {
      getOutstandingSeason.mockReturnValueOnce({ seasonID: 2011, outstandingAmount: 20 })
    });
    it('should record the full payment to the earliest outstanding season', () => {
      addPayment(mockCustomerID, mockDate, 20);
      expect(saveRepayment).toHaveBeenCalledWith(20, 2011, mockCustomerID, mockDate);
    });
    it('should save only one payment record', () => {
      addPayment(mockCustomerID, mockDate, 20);
      expect(saveRepayment).toHaveBeenCalledTimes(1);
    });
  });
  describe('For less than Exact payment', () => {
    beforeEach(() => {
      getOutstandingSeason.mockReturnValueOnce({ seasonID: 2011, outstandingAmount: 20 })
    });
    it('should record the full payment to the earliest outstanding season', () => {
      addPayment(mockCustomerID, mockDate, 10);
      expect(saveRepayment).toHaveBeenCalledWith(10, 2011, mockCustomerID, mockDate);
    });
    it('should save only one payment record', () => {
      addPayment(mockCustomerID, mockDate, 10);
      expect(saveRepayment).toHaveBeenCalledTimes(1);
    });
  });
});