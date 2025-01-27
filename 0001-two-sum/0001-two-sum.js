/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let checkedNums = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        const missingNum = target - nums[i];
        if (checkedNums.indexOf(missingNum) > -1) {
            return [i, checkedNums.indexOf(missingNum)];
        }
        checkedNums.push(nums[i]);
    }
    return 0;
};