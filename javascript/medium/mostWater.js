function maxArea(height){
	let max = 0, left = 0, right = (height.length-1);
	while(left < right){ //until intersecting

		//see if proposed area is > max
		const area = (right-left)*Math.min(height[left],height[right]);
		if(area > max) max = area;

		//adjust the sides of the container
		if(height[left] < height[right]) left++;
		else if(height[left]> height[right]) right--;
		else { 
			left++; right--;
		}
	}

	//return maximum computed area. 
	return max;
}

//Leetcode Run Results
//56ms		|	48.72mb
//93.07%	|	98.47%
