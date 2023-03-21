/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0
    nums.forEach((number)=>{
        total += number;
    });
    // console.log("Total :" + total);
    leftSum = 0;
    for (let i=0;i<nums.length;i++){
        let rightSum = total - leftSum - nums[i];
        if(leftSum == rightSum){
            return i
        };
        leftSum += nums[i];
    }
    return -1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndexA = function(nums) {
    let total = 0;
    let leftSum = 0;

    for(let i = 0; i < nums.length;i++){
        total += nums[i];
    }
    // console.log("Total :: " + total);
    for (let i=0;i<nums.length;i++){
        let rightSum = total - leftSum - nums[i];
        if(leftSum == rightSum){
            return i
        };
        leftSum += nums[i];
        // console.log("Right Sum :: " + rightSum + "|| Loop :: " + i);
        // console.log("Left Sum :: " + leftSum + "|| Loop :: " + i);
    }
    return -1
};

//test case
let a = [1,7,3,6,5,6]

//Test Output
console.log(a);
console.log(pivotIndex(a));