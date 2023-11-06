function debounce(fn,t){
    let i;
    return function(...args){
        clearTimeout(i);
        i = setTimeout(()=>fn(...args),t)
    }
}