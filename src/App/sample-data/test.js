import { clearData, loadData, uploadPayments } from '.'
import data from './data'
import { addPayment } from '../../records';

jest.mock('../../records');

describe('Sample Data functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('loadData', () => {
    beforeEach(() => {
      loadData();
    });
    it('should be a function', () => {
      expect(loadData).toBeInstanceOf(Function);
    });
    it('should load users into localStorage', () => {
      const expected = data.Customers;
      const actual = JSON.parse(localStorage.getItem('Customers'));
      expect(actual).toEqual(expected);
    });
    it('should load seasons in to local storage', () => {
      const expected = data.Seasons;
      const actual = JSON.parse(localStorage.getItem('Seasons'));
      expect(actual).toEqual(expected);
    });
    it('should load Customer Summary in to local storage', () => {
      const expected = data.CustomerSummaries;
      const actual = JSON.parse(localStorage.getItem('CustomerSummaries'));
      expect(actual).toEqual(expected);
    });
  });

  describe('uploadPayments', () => {
    beforeEach(() => {
      uploadPayments();
    });
    it('should be a function', () => {
      expect(uploadPayments).toBeInstanceOf(Function);
    });
    it('should call addPayment for each payment record in the sample data', () => {
      data.RepaymentUploads.forEach(({ CustomerID, Date, Amount, SeasonID }) => {
        expect(addPayment).toHaveBeenCalledWith(CustomerID, Date, Amount, SeasonID);
      })
    });
  });

  describe('clearData', () => {
    const clearLocalStorage = localStorage.clear;
    beforeEach(() => {
      window.localStorage.__proto__.clear = jest.fn();
    });
    afterEach(() => {
      window.localStorage.__proto__.clear = clearLocalStorage
    });
    it('should be a function', () => {
      expect(clearData).toBeInstanceOf(Function);
    });
    it('should empty localstorage', () => {
      expect(localStorage.clear).not.toHaveBeenCalled();
      clearData();
      expect(localStorage.clear).toHaveBeenCalled();
    });
  });
});
