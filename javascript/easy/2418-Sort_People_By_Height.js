

function randrange(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

	//ONE LINER: (uses > memory)
    // return names.map((n,i)=>[n,heights[i]]).sort((a,b)=>b[1]-a[1]).map(([n])=>n)
    
	//helper to swap both arrays at the same time
	const swap = (x,y) => { 
        let name = names[x], height = heights[x]
        names[x] = names[y]
        heights[x] = heights[y]
        names[y] = name
        heights[y] = height
    }

	//quicksort to arrange in descending order using two arrays
    function quicksort(start,end){
        if (start >= end) return 
        const p = randrange(start,end+1) 
        const pivot = heights[p]
        swap(p,end)
        let more_ptr = start; 
        for(let i = start; i < end; i++){
            if(heights[i] > pivot){
                swap(i,more_ptr);
                more_ptr++
            }
        }
        swap(end,more_ptr);
        quicksort(start,more_ptr-1)
        quicksort(more_ptr+1,end)
    }

	//perform the sort and return the names (updated in place)
    quicksort(0,names.length-1)
    return names
};





