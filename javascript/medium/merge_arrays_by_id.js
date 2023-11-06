function joinArrays(arr1,arr2){
    //use a map to keep track of what ids we have seen in the first list
    let seen = new Map()
    let merged = arr1;
    for(let n = 0; n < arr1.length; n++){
        seen.set(arr1[n].id, n)
    }

    //get the overwrites or new values from the second array
    for(let m = 0; m < arr2.length; m++){
        //if we have seen the id before
        if(seen.has(arr2[m].id)){
            //modify the fields in the current object
            let idx = seen.get(arr2[m].id);
            for(let field of Object.keys(arr2[m])){
                merged[idx][field] = arr2[m][field]
            }
        } else { 
            //otherwise we push the new item
            merged.push(arr2[m])
        }
    }
    //return the merged array ,sorted by id (ascending)
    return merged.sort((a,b)=>a.id-b.id);
}

//note: tested on leetcode, may come back and write local test function later...
//273ms | 95.95mb
//81.27%| 74.09%


