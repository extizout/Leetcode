var containsDuplicate = function(nums) {
    for(let i = 0;i< nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){
                console.log("Found !! AT");
                console.log("At LOOP i: " + i + " || At LOOP j: " + j)
                console.log("Nums[i] :" + nums[i])
                console.log("Nums[j] :" + nums[j])
                return true
            }
        }
    }
    console.log("False");
    return false
};

//Test Variable Define
a = [1,2,3,5,6,5,3,4];
b = [1,2,3,4];
c = [1,1,1,3,3,4,3,2,4,2];

//Test Function
console.log("a");
containsDuplicate(a);
console.log("b");
containsDuplicate(b);
console.log("c");
containsDuplicate(c);
