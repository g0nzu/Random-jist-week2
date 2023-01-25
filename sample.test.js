import { add } from './sample';

describe('Testing add', () => {
  test('If a = 1 and b = 1 result should be 2', () => {
    const r = add(1, 1);
    expect(r).toBe(2);
  });
});
