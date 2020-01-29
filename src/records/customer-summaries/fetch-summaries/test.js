import { fetchAll } from '.'

describe('fetchAll', () => {
  it('should return an empty array if there is no localstorage CustomerSummary', () => {
    expect(fetchAll()).toEqual([]);
  });
});