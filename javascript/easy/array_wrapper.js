const ArrayWrapper = function(nums){
    this.nums = nums;
    //if we push or pop items we need to recalculate the sum / string
    this.lastLen = nums.length;
    this.sum = this.getSum()
    this.str = this.getString()
    
}
//helper function to calculate the sum of numbers array
ArrayWrapper.prototype.getSum = function(){
    let sum = 0
    for(let i = 0; i < this.nums.length; i++){
        sum += this.nums[i]
    }
    return sum;
}

//helper - concatenates strings of the numbers in an array in [1,2,...,n] format
ArrayWrapper.prototype.getString = function(){
    let str = "["
    for(let n = 0; n < this.nums.length-1; n++)
        str += `${this.nums[n]},`;
    
    if(this.nums.length > 0)
       str += `${this.nums[this.nums.length-1]}]` 
    else  
        str += "]"

    return str
}

//allows us to 'add/compare' arrays. 
ArrayWrapper.prototype.valueOf = function(){
    //only recompute sum and string if length has changed since last time
    if(this.lastLen !== this.nums.length) { 
        this.sum = this.getSum();
        this.str = this.getString();
        this.lastLen = this.nums.length;
    }
    return this.sum;
}

//convert array of nums into a string, uses helper method if the string is not 'up to date'
ArrayWrapper.prototype.toString = function(){
 //only recompute sum and string if length has changed since last time
 if(this.lastLen !== this.nums.length){
     this.str = this.getString();
     this.sum = this.getSum();
     this.lastLen = this.nums.length;
     
 }
 return this.str
}