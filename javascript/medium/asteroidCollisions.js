
function asteroidCollision(asteroids){
	const survivors = [] 
	for(let i = 0; i < asteroids.length; i++){
		const current = asteroids[i]
		const prev = asteroids.at(-1)
		//empty stack or prev and current don't collide
		if(!survivors.length || prev < 0 || current > 0)
			survivors.push(current);
		
		//cancel out, same size
		else if( prev + current === 0) 
			survivors.pop();
		
		//current is bigger, destroys prev
		else if( Math.abs(prev) < Math.abs(current)){
			survivors.pop();
			i--;
		}
	}
	//only the biggest / non colliding asteroids 
	return survivors;
}

//Leetcode Results
//	69ms	|	51.13mb
//	37.17%	|	16.97%

//
