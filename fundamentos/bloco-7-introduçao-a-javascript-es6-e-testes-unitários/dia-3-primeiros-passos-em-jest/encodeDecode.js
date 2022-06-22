
const encode = (string) => {
    let replace = string.replace(/a/gi, '1');
    replace = replace.replace(/e/gi, '2');
    replace = replace.replace(/i/gi, '3');
    replace = replace.replace(/o/gi, '4');
    replace = replace.replace(/u/gi, '5');
  
    return replace;
}

const decode = (string2) => {
    let replace = string2.replace(/1/gi, 'a');
    replace = replace.replace(/2/gi, 'e');
    replace = replace.replace(/3/gi, 'i');
    replace = replace.replace(/4/gi, 'o');
    replace = replace.replace(/5/gi, 'u');
  
    return replace;
}

module.exports = {
  encode,
  decode,
};