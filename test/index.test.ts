import axios from 'axios';

import cattry from '../src';

const sum = (a: number, b: number) => a + b;

const getEmployees = () =>
  axios.get('http://dummy.restapiexample.com/api/v1/employees');

it('should execute the func and return the value 30', async () => {
  const result = await cattry(sum(10, 20));

  expect(result[1]).toEqual(30);
});

it('should execute the promise and return the request response', async () => {
  const result = await cattry(getEmployees());

  expect(Array.isArray(result[1].data)).toEqual(true);
});
