/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let startNum = nums[0];
    let currentAmt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1] - nums[i] !== 1) {
            if (currentAmt > 0) {
                res.push(`${startNum}->${nums[i]}`)
            } else {
                res.push(startNum.toString());
            }
            startNum = nums[i+1];
            currentAmt = 0;
        } else {
            currentAmt++;
        }
    }
    return res;
};