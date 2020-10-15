const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    const removeNulls = (str) => {
        const ind = str.indexOf('1');
        return str.substr(ind);
    };

    const binaryToSign = (sym) => {
        if (sym === '10') {
            return '.';
        }
        if (sym === '11') {
            return '-';
        }
        else {
            return ' ';
        }
    };

    const signToLetter = (symbol) => {
        const object = {...MORSE_TABLE};
        return (symbol === ' ') ? symbol : Object.values(object[symbol])[0];
    };

    let result = [];
    let segments = [];

    let array = expr.match(/.{1,10}/g);

    array.map((item) => {
        if (item[0] === '*') {
            segments.push(' ');
        } else {
            let segment = removeNulls(item);
            segments.push(segment);
        }
    });

    segments.map((item) => {
        let pairs = [];
        pairs = item.match(/.{1,2}/g);
        let letters = [];
        letters = pairs.map((el) => binaryToSign(el));
        let fragment = letters.join('');
        let decoded = signToLetter(fragment);
        result.push(decoded);
    });
    return result.join('');
};

module.exports = {
    decode
}