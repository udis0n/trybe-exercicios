const searchEmployee = require('./searchEmployee');

it('Verify if searchEmployee function exist', () => {
    expect(typeof searchEmployee).toBe('function');
});
it('Verify if id exist', () => {
    expect(searchEmployee('4456-4')).toBe('4456-4')
});
it(`If id doesn't exist return "ID não identificada"`, () => {
    expect(searchEmployee('244-3')).toBe('ID não identificada')
});