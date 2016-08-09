

const table = [
    '||:::', ':::||', '::|:|', '::||:', ':|::|',
    ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
];
function checkBarcode(barcode) {
    return barcode.match(/^\|[: |]+\|$/);
}
function deleteBorder(barcode) {
    return barcode.slice(1, -1);
}
function barcodeToDigits(barcode) {
    return barcode.match(/.{1,5}/g).map(str => table.indexOf(str));
}
function checkDigit(digits) {
    return (digits.reduce((a, b) => a + b)) % 10 === 0;
}
function align(zipcode) {
    if (zipcode.length === 9) {
        return `${zipcode.slice(0, 5)}-${zipcode.slice(5)}`;
    }
    return zipcode;
}
function toZipcode(digits) {
    return digits.join('').slice(0, -1);
}
class Barcode {
    barcode2Zipcode(barcode) {
        if (!checkBarcode(barcode)) {
            return {error: `you should input like this :
             |:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|
                    or 	|:::||::|:|::||::|::|:|:|::|:|:|
`};
        }
        const deleteBorderBar = deleteBorder(barcode);
        const digits = barcodeToDigits(deleteBorderBar);
        const zipcode = toZipcode(digits);
        const formattedZipcode = align(zipcode);
        return {value: formattedZipcode}
    }
}

module.exports = Barcode;
