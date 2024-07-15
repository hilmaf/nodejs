const {odd, even} = require('./var'); // require : 참조

function checkOddOrEven(num) {
    if(num % 2) { // 홀수라면 ***
        return odd;
    }

    return even;
}

/***
 * 자바스크립트에서 false값으로 평가되는 값들 (=falsy)
 * false, 0, -0, 0n, 빈 문자열, null, undefined, NaN
 * 
 * 자바스크립트에서 true값으로 평가되는 값들
 * falsy 값이 아닌 모든 값들
 */

module.exports = checkOddOrEven;