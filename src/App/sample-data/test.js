import { clearData, loadData, uploadPayments } from '.'
import data from './data'

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
  });

  describe('uploadPayments', () => {
    it('should be a function', () => {
      expect(uploadPayments).toBeInstanceOf(Function);
    });
  });

  describe('clearData', () => {
    it('should be a function', () => {
      expect(clearData).toBeInstanceOf(Function);
    });
  });
});
