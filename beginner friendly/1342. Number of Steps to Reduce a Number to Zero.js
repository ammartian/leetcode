/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    var step = 0;

    while (num > 0) {
        step++;
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num -= 1;
        }
    }
    return step;
};

// Time complexity = O(n) [big O event] because we need to loop n time to get our output
// Spacce complexity = O(1) [constant] because do not create data structure proportional in size to our input

// Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/?languageTags=javascript