/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    //declare object
    const obj = {};

    for (let n of nums) {
        if (obj[n] == null) {
            obj[n] = 0;
        }
        obj[n]++;
    }

    for (let n in obj) {
        if (obj[n] === 1) {
            return Number(n);
        }
    }
};