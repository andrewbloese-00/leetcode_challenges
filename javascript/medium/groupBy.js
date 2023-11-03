Array.prototype.groupBy = function(fn){
    let groups = {};
    for(let i = 0; i < this.length; i++){
        let key  = fn(this.at(i))
        if(groups[key] == undefined)
            groups[key] = [ this.at(i)]
        else {
            groups[key].push(this.at(i))
        }
    }
    return groups

}


//local test - group the documents by their 'id' field using a selector function
const inputExample = [ {"id": "1"}, {"id": "1"}, {"id": "2"}]
const selector = item => item.id

const IS_TRUE = i => i === true
const EXPECT = {
    "1": [{"id": "1"},{"id": "1"}],
    "2": [{"id": "2"}]
}
function test(){
    const result = inputExample.groupBy(selector)
    console.log(result)
    console.log(
        "Passed groupBy example case? ", 
        JSON.stringify(result) === JSON.stringify(EXPECT)
    );
}
test()
