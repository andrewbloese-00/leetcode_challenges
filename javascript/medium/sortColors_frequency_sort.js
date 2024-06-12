const RED = 0, WHITE = 1, BLUE = 2;
function sortColors(nums){
    const f = Array(3).fill(0)
    for(let i = 0; i < nums.length; i++)
        f[nums[i]]++

    for(let i = 0; i < nums.length; i++){
        if(f[RED]){
            nums[i] = RED;
            f[RED]--
            continue
        } 
        if(f[WHITE]){
            nums[i] = WHITE;
            f[WHITE]--
            continue
        }
        if(f[BLUE]){
            nums[i] = BLUE
            f[BLUE]--
            continue
        }
    }


}

//leetcode results 
// 44ms		| 51.30mb
// 99.49%	| 70.75% 
