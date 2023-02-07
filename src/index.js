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
   let symbolsArr = [];
   let result = '';
   for (let i = 0; i < expr.length; i += 10) {
    symbolsArr.push(expr.slice(i, i + 10));
  }
  for (let j = 0; j < symbolsArr.length; j++) {
    for (let k = 0; k < symbolsArr[j].length; k++) {
        while (symbolsArr[j].startsWith('0')) {
            symbolsArr[j] = symbolsArr[j].replace('0', '');
        }
        if (symbolsArr[j][k] === '1' && symbolsArr[j][k + 1] === '0') {
            symbolsArr[j] = symbolsArr[j].replace('10', '.');
        } else if (symbolsArr[j][k] === '1' && symbolsArr[j][k + 1] === '1') {
            symbolsArr[j] = symbolsArr[j].replace('11', '-');
        } 
    }
        if (symbolsArr[j] === '**********') {
            result += ' '
        } else {
            result += MORSE_TABLE[symbolsArr[j]]
        }
  }
  return result;
}

module.exports = {
    decode
}