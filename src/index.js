const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbol = '';
    let code = '';
    let morse = '';
    let result = '';
    for (let i = 0; i < expr.length / 10; i++) {
        let a = 10 * i;
        let b = a + 10;
        symbol = expr.slice(a, b);
        if (symbol === '**********') {
            result += ' ';
        } else {
            for (let x = 0; x < symbol.length / 2; x++) {
                code = symbol.slice(8 - x * 2, 10 - x * 2);
            if (code === '11') {
                morse = '-' + morse;
            } else if (code === '10') {
                morse = '.' + morse;
            } else {
                morse = '' + morse;
            }
            }
            result += MORSE_TABLE[morse];
            morse = '';
        }
    }
  return result
}

module.exports = {
    decode
}