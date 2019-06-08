import cattry from '../src';

const sum = (a: number, b: number) => a + b;

const sumWithThrowError = (a: number, b: number) => {
  throw new Error('Error example');

  return a + b
};

describe('test one', () => {
  it('works', async () => {
    const result = await cattry(sum(10, 20));

    expect(result[1]).toEqual(30);
  });
});

describe('test two', () => {
  it('works', async () => {
    const [err] = await cattry(sumWithThrowError(10, 20));

    expect(err).toEqual(new Error('Error example'));
  });
});
