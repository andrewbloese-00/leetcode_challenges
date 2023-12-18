function simplifyPath(path){
    let level = 0;
    let simple = []
    const pathSegments = path.split("/").filter(Boolean)
    for(let p = 0; p < pathSegments.length; p++){
        if(pathSegments[p] == ".") continue
        else if(pathSegments[p] == ".."){
            if(level > 0) {
                simple = simple.slice(0,level)
                level--;
            } 
        } else {
            simple[level] = (pathSegments[p])
            level++;
        }
    }
    return `/${simple.slice(0,level).join("/")}`  
}


//Leetcode Results
//  Runtime     |       Memory
//  64ms :(     |       44.22mb
//  30.6%        |      49.04