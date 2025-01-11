const sum = require ('./sum')
// adding of workflow
test('sum() should do basic addition', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  });
  
  