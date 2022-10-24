/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    var maxWealth = 0;
    for (var customer = 0; customer < accounts.length; customer++) {
        var currentCustomerWealth = 0;
        for (var bank = 0; bank < accounts[customer].length; bank++) {
            currentCustomerWealth += accounts[customer][bank];
        }
        maxWealth = Math.max(maxWealth, currentCustomerWealth);
    }
    return maxWealth;
};

// Time complexity = O(n x m) because must go through every row of each array
// Space complexity = O(1) [constant] because we do not create a data struc proportional to our input size

// Link: https://leetcode.com/explore/learn/card/the-leetcode-beginners-guide/692/challenge-problems/4423/