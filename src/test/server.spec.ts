import Server from '../server';

describe('addNumbers', () => {
  it('should sum two numbers', () => {
    const expected = 10;

    const server = new Server();
    const result = server.addNumbers(5, 5);

    expect(result).toBe(expected);
  });
});
