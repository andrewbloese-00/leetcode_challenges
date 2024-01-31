
//challenge: given two sorted arrays, nums1 (len = m) and nums2 (len = n)
// merge them into a single array. nums1 is an array of length m+n to 
// accomodate the elements from nums2. The function should not return the 
// sorted array, but rather store all items in nums1 in sorted order

function merge(nums1,m,nums2,n){
	//start from the end 
	let i = m-1, j = n-1, k = (m+n-1);
	
	//iterate through nums1/2 and compare, inserting the value from nums1 
	//or nums2 at index 'k' 
	while(i >= 0 && j >= 0){
		if(nums1[i] > nums2[j]){
			nums1[k] = nums1[i]
			i--; k--;
		}
		else { 
			nums1[k] = nums2[j]
			j--; k--;
		}
	}

	//nums1 longer than nums2
	while(i >= 0){
		nums1[k] = nums1[i];
		i--; k--;
	}
	//nums2 longer than nums1
	while(j >= 0) {
		nums1[k] = nums2[j]
		j--; k--;
	}

	//all nums from nums1 & nums2 are now sorted in nums1
}
