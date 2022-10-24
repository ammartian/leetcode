/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const array = [];

    for (i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            array.push("FizzBuzz")
        }
        else if (i % 3 == 0) {
            array.push("Fizz")
        }
        else if (i % 5 == 0) {
            array.push("Buzz")
        }
        else {
            array.push(i.toString())
        }
    }
    return array;
};

// Time complexity = O(n) [big O event] because we need to loop n time to get the value of output array
// Spce complexity = O(1) [constant] because we do not create data structure proportional in size to our input

// Link: https://leetcode.com/problems/fizz-buzz/description/