const { uppercase } = require('./exercise7');

it('Verifica se a função uppercase retorna o resultado esperado', (done) => {
  uppercase('udison', (str) => {
    try {
      expect(str).toBe('UDISON');
      done();
    } catch (error) {
      done(error);
    };
  })
});