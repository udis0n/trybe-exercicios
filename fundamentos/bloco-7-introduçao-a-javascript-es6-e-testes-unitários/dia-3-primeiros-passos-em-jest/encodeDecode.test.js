const {encode, decode} = require('./encodeDecode');

describe(' Para as funções encode e decode', () => {
    it('Teste se encode e decode são funções;', () => {
        expect(typeof encode && typeof decode).toBe('function');
    });
    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        expect(encode('aeiou')).toBe('12345');
    });
    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
        expect(decode('12345')).toBe('aeiou');
    });
    it('Teste se as demais números não são convertidos para cada caso;', () => {
        expect(decode('0123456789')).toBe('0aeiou6789');
    });
    it('Teste se as demais letras não são convertidos para cada caso;', () => {
        expect(encode('abcdefghijklmnopqrstuvxwyz')).toBe('1bcd2fgh3jklmn4pqrst5vxwyz');
    });
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        const a = 'abcde';
        expect(encode('abcde') && decode('12345')).toHaveLength(5);
    });
});