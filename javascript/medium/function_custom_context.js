Function.prototype.canPolyfill = function (ctx,...args){
    let f = Symbol()
    ctx[f] = this;
    return ctx[f](...args);
}

//      leetcode test
//---------------------------\\
//     49ms     |   41.75mb  ||
//     80.48%   |   80.99%   ||
//---------------------------//

