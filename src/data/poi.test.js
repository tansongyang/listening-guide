import * as poi from './poi';

describe('poi/findIndexByStart', () => {
  it('works when too low', () => {
    const pois = [{ start: 10 }, { start: 20 }];
    const result = poi.findIndexByStart(pois, 0);
    expect(result).toBe(0);
  });

  it('works when too high', () => {
    const pois = [{ start: 0 }, { start: 10 }];
    const result = poi.findIndexByStart(pois, 20);
    expect(result).toBe(1);
  });

  it('works with exact matches', () => {
    const pois = [{ start: 0 }, { start: 10 }, { start: 20 }];
    const result = poi.findIndexByStart(pois, 10);
    expect(result).toBe(1);
  });

  it('picks the floor when between two pois', () => {
    const pois = [{ start: 0 }, { start: 10 }, { start: 20 }];
    const result = poi.findIndexByStart(pois, 19);
    expect(result).toBe(1);
  });
});
