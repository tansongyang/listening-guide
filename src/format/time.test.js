import * as format from './time';

describe('format/time/secondsToString', () => {
  it('works for times like 0:00', () => {
    expect(format.secondsToString(0)).toBe('0:00');
  });

  it('works for times like 0:0s', () => {
    expect(format.secondsToString(8)).toBe('0:08');
  });

  it('works for times like 0:ss', () => {
    expect(format.secondsToString(32)).toBe('0:32');
  });

  it('works for times like m:0s', () => {
    expect(format.secondsToString(64)).toBe('1:04');
  });

  it('works for times like m:ss', () => {
    expect(format.secondsToString(70)).toBe('1:10');
  });

  it('works for times like mm:0s', () => {
    expect(format.secondsToString(601)).toBe('10:01');
  });

  it('works for times like mm:ss', () => {
    expect(format.secondsToString(610)).toBe('10:10');
  });

  it('works for times like h:00:0s', () => {
    expect(format.secondsToString(3601)).toBe('1:00:01');
  });

  it('works for times like h:00:ss', () => {
    expect(format.secondsToString(3610)).toBe('1:00:10');
  });

  it('works for times like h:0m:0s', () => {
    expect(format.secondsToString(3661)).toBe('1:01:01');
  });

  it('works for times like h:0m:ss', () => {
    expect(format.secondsToString(3670)).toBe('1:01:10');
  });

  it('works for times like h:mm:0s', () => {
    expect(format.secondsToString(4201)).toBe('1:10:01');
  });

  it('works for times like h:mm:ss', () => {
    expect(format.secondsToString(4210)).toBe('1:10:10');
  });
});

describe('format/time/stringToSeconds', () => {
  it('works for "ss"', () => {
    expect(format.stringToSeconds('10')).toBe(10);
  });
  it('works for "mm:ss"', () => {
    expect(format.stringToSeconds('10:01')).toBe(601);
  });
  it('works for "h:mm:ss"', () => {
    expect(format.stringToSeconds('1:01:01')).toBe(3661);
  });
});
