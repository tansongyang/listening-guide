import * as format from './time';

describe('format/time', () => {
  it('works for times like 0:00', () => {
    const seconds = 0;
    const result = format.secondsToString(seconds);
    expect(result).toBe('0:00');
  });

  it('works for times like 0:0s', () => {
    const seconds = 8;
    const result = format.secondsToString(seconds);
    expect(result).toBe('0:08');
  });

  it('works for times like 0:ss', () => {
    const seconds = 32;
    const result = format.secondsToString(seconds);
    expect(result).toBe('0:32');
  });

  it('works for times like m:0s', () => {
    const seconds = 64;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:04');
  });

  it('works for times like m:ss', () => {
    const seconds = 70;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:10');
  });

  it('works for times like mm:0s', () => {
    const seconds = 601;
    const result = format.secondsToString(seconds);
    expect(result).toBe('10:01');
  });

  it('works for times like mm:ss', () => {
    const seconds = 610;
    const result = format.secondsToString(seconds);
    expect(result).toBe('10:10');
  });

  it('works for times like h:00:0s', () => {
    const seconds = 3601;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:00:01');
  });

  it('works for times like h:00:ss', () => {
    const seconds = 3610;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:00:10');
  });

  it('works for times like h:0m:0s', () => {
    const seconds = 3661;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:01:01');
  });

  it('works for times like h:0m:ss', () => {
    const seconds = 3670;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:01:10');
  });

  it('works for times like h:mm:0s', () => {
    const seconds = 4201;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:10:01');
  });

  it('works for times like h:mm:ss', () => {
    const seconds = 4210;
    const result = format.secondsToString(seconds);
    expect(result).toBe('1:10:10');
  });
});
