/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
};

//Time complexity = O(n) [big O event ]bcs we go thru every value in our input
//Space complexity = O(1) [constant] because we do not create any data struc proportional in size with our input

// Link: https://leetcode.com/explore/learn/card/the-leetcode-beginners-guide/692/challenge-problems/4422/