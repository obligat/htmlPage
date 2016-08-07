'use strict';
const table = [
    '||:::', ':::||', '::|:|', '::||:', ':|::|',
    ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
];
function checkZipcode(zipcode) {
    return /^\d{5}(-?\d{4})?$/.test(zipcode);
}
function formatZipcode(zipcode) {
    return zipcode.toString().replace('-', '').split("").map(a=>parseInt(a));
}
function calculateCheckDigit(formatedCode) {
    let digit = formatedCode.reduce((a, b) => a + b) % 10;
    return digit > 0 ? (10 - digit) : 0;
}

function toBarcode(zipcode) {
    let barcode = zipcode.map(i => table[i]).join('');
    return `|${barcode}|`
}

class Zipcode {
    zipcode2Barcode(zipcode) {
        if (!checkZipcode(zipcode)) {
            return {success: false, value: 'invalid_zipcode'};
        }
        let zipcodeWithoutDash = formatZipcode(zipcode);
        let checkDigit = calculateCheckDigit(zipcodeWithoutDash);
        let barcode = toBarcode(zipcodeWithoutDash.concat(checkDigit));
        return {success: true, value: barcode};
    }

}


module.exports = Zipcode;

    


