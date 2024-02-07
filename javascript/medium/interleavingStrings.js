
const OFFSET = "a".charCodeAt(0)

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const freq = Array(26).fill(0)
    let i = 0; 
    //get frequency of chars in result
    while(i < s3.length){ 
        const key = s3.charCodeAt(i) - OFFSET
        freq[key]++
        i++
    }

    console.log(freq)

    //subtract from frequency using s1.. and s2...
    i = 0;
    while( i < s1.length){
        const key = s3.charCodeAt(i) - OFFSET
        freq[key]--
        i++
    }

    i = 0;
    while( i < s2.length){
        const key = s3.charCodeAt(i) - OFFSET
        freq[key]--
        i++
    }
    console.log(freq)
    //verify all are 0, same char frequency === obtainable by interleaving
    i = 0; 
    while(i < freq.length){
        if(freq[i] !== 0) return false;
        i++
    }
    return true
    
};



console.log(isInterleave("aabcc","dbbca","aadbbcbcac"));



