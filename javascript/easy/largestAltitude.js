function largestAltitude(gain){
    let alt = 0, max = 0; 
    for(let i = 0; i < gain.length; i++){
        alt += gain[i];
        if(alt > max) { max = alt;}
    }
    return max;
};

//leetcode results 
//94ms 	-	42.87mb
//6.13%	-	65.22%
