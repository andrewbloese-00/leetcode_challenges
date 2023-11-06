/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
    if(typeof obj !== 'object' || obj === null){
        return obj
    }
    else if (Array.isArray(obj)){
        let compact = []
        for(let element of obj){
            let tmp = compactObject(element)
            if(tmp){
                compact.push(tmp)
            }
        }
        return compact
    }
    else { //is an object type
        let compact = {}
        for(let key in obj){
            let tmp = compactObject(obj[key]);
            if(tmp){
                compact[key] = tmp
            }
        }
        return compact
    }

};

/*
    Leetcode Tests
    75ms        |   51.98mb
    90.47%      |   77.29%

*/