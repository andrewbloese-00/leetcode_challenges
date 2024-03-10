#include <vector>
#include <set> 

using namespace std;
vector<int> intersection(vector<int>& nums1,vector<int>& nums2){
	set<int> seen; 
	vector<int> intersection;
	for(auto x : nums1) seen.insert(x);
	for(auto y : nums2) {
		set<int>::iterator = seen.find(y);
		if(it !== seen.end()) intersection.push_back(y);
		seen.erase(it);
	}
	return intersection;
}

//Leetcode Run Results
// 3ms		|	12.79mb
// 83.79%	|	41.99%

