const fibGenerator = function*() {
    //using a swap variable "$" instead of destructuring on every call
    let n = 0, m = 1, $;
    while(true){
        yield n; 
        $ = n;
        n = m;
        m = $ + m;
    }
};

/*
    LeetCode Test
    41ms    | 41.70mb
    94.87%  | 83.03%
 */