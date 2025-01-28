/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};
    for (let num of nums) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            return true;
        }
    }
    return false;
};