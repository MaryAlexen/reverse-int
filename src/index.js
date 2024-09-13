module.exports = function reverse (n) {
    const absN = Math.abs(n);
    const string = absN.toString();
    const array = string.split('')
    const reversed = array.reverse();
    const fromArrayToString = reversed.join('')
   return fromArrayToString;
}