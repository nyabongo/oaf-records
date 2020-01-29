import { clearData, loadData, uploadPayments } from '.'

describe('loadData', () => {
  it('should be a function', () => {
    expect(loadData).toBeInstanceOf(Function);
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