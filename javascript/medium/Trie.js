
function Node(char,isTerminal,children){
    this.char=char === undefined ? "" : char;
    this.isTerminal = isTerminal === undefined ? false : isTerminal ;
    this.children = children === undefined ? new Map() : children
}


var Trie = function() {
    this.root = new Node(".");

};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let n= word.length; 
    let current = this.root; 
    for(let i = 0; i < n; i++ ){
        const char = word.charAt(i);
        if(current.children.has(char))
            current = current.children.get(char);
        else { 
            let newChild = new Node(char, i === n - 1);
            current.children.set(char, newChild);
            current = newChild; 
        }
    }   
    current.isTerminal = true;  
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root; 
    for(let i = 0; i < word.length; i++){
        const char = word.charAt(i)
        if(current.children.has(char)) {
            current = current.children.get(char);
        } else return false //not found
    }
    return current.isTerminal;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root; 
    for(let i = 0 ; i < prefix.length ; i ++ ){
        const char = prefix.charAt(i);
        if(current.children.has(char))
            current = current.children.get(char);
        else return false
    }
    return true; 
};


//leetcode results 
// 156ms	|	73.42mb
// 80.81%	|	14.58%

