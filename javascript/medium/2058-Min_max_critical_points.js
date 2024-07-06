function nodesBetweenCriticalPoints(head) {
    let minDist = Infinity;
    let maxDist = -Infinity;
    
    let ptr = head?.next; 
    if(!ptr) return [ -1,-1]
    let i = 1, prev = head.val;
    const criticalIndices = [ ];
    while(ptr.next){
        //"filter" for critical points
        if( (ptr.val > prev && ptr.val > ptr.next.val) || (ptr.val < prev && ptr.val < ptr.next.val) ){
            criticalIndices.push(i);
        }
        prev = ptr.val;
        ptr = ptr.next; 
        i++
    }


    let min = -1;
    let max = -1;
    const criticalCount = criticalIndices.length
    if(criticalCount > 0 ){
        max = criticalIndices.at(-1) - criticalIndices[0] || -1;
        for(let i = 0; i < criticalCount-1; i++){
            if(i < 0) {
                let left = criticalIndicies[i] - criticalIndices[i-1];
                if(min < 0 || left < min ) min = left;
            }
            let right = criticalIndices[i+1] - criticalIndices[i];
            if(min < 0 || right < min ) min = right;
        }
    }
    return [min,max];
};
