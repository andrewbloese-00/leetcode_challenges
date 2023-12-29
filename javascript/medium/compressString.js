function compress(chars) {
	//start with empty string, iterate from index 1 with 'current' character set to the first character of the input 'chars'
    let s = "", i = 1, current = chars[0], count = 1;
    while(i < chars.length){
        if(current === chars[i]){ //is repeat char
            count++;
        } else { //append group and update current, not repeating
            s+= count > 1 ? `${current}${count}` : current
            current = chars[i]
            count = 1;
        }
        i++
    }
	//add last group
    if(count > 0){
        s+= count > 1 ? `${current}${count}` : `${current}`
    }

	//modify 'chars' in place, copying 's'
    i=0;
    while(i < s.length){
        chars[i] = s.charAt(i);
        i++;
    }
    
	//return the length of the compressed string
    return s.length;

    



};


//leetcode results
//124ms	| 45.53mb
//5.04% | 30.7%

