/*
Problem Description:
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function

Approach: 
use quicksort with partition algorithm to sort the array in place using constant extra memory. (the tmp variable used for swapping)
Sorts in a single pass with divide and conquer. 
*/




function sortColors(nums){
	const h = nums.length -1;
	quicksort(nums,0,h);
}

//quicksort implementation
function quicksort(arr, l, h){
	if(l < h){
		//divide step: partition array
		const p = partition(arr,l,h)
		//conquer left of partition
		quicksort(arr,l,p-1)
		//conquer right of partition
		quicksort(arr,p+1,r)
	}
}


//partion -> quicksort helper function, swap in place
function partition(arr,l,h){
	let pivot = arr[h], i = l -1, tmp;
	for(let j = l ; j < h ; j++){
		if(arr[j] <= pivot ){
			i++;
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}
	}
	//swap pivot with high element
	tmp = arr[i+1];
	arr[i+1] = arr[h];
	arr[h] = tmp;
	return i+1; //pivot index
}



//Leetcode Results
// 50ms		|	48.99mb
// 75.12%	|	5.03%


