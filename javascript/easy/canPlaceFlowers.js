
function canPlaceFlowers(flowerbed,n){
	for(let i = 0; i < flowerbed.length; i += 2){
		if(flowerbed[i] === 0)
			if( i === flowerbed.length-1 || 
				flowerbed[i] === flowerbed[i+1]) n--;
			else i++;
	} 
	return n <= 0;
}


//leetcode results 
// 54ms		|	43.93mb
// 79.41%	|	75.81%
