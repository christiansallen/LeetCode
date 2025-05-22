/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--; // Adjust for 0-indexed letters
        let remainder = columnNumber % 26;
        result = String.fromCharCode(65 + remainder) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};
