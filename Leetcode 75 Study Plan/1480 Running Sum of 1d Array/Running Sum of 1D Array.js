/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i=0; i < nums.length; i++){
        if(i!=0)
        nums[i] = nums[i] + nums[i-1];
    }
    return  nums;
};

//Test Case
let a = [1,2,3,4];
let b = [1,1,1,1,1];
let c = [3, 1, 2, 10, 1];


console.log(runningSum(a));
console.log(runningSum(b));
console.log(runningSum(c));
