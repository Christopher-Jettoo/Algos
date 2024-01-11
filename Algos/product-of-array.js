const productExceptSelf = function(nums) {
    //create a product variable to store values 
    // loop over the nums array and then loop over the array again
    // if we encounter the first loops index then we continue the loop
    // multiplying each value into product variable
    // once we exit the loop we can push the product variable into an array
    //once that outer loop exits we can finally return out the array
    let result = [];

    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = 0; j < nums.length; j++){
           
            if(nums[i] === nums[j]){
                continue;
            }else{
                product *= nums[j];
            }
            
           
        }
        result.push(product)
    }
    return result; 
};


console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [ -0, -0, 9, 0, -0 ]
