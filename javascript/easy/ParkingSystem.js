
//Challenge -> implement a parking system that can accept a fixed number
// of big, medium , and small cars. The system should be able to check if
// a car of type [ 1 , 2 , 3 ] == [ big , medium , small ] can be added
// to the lot
//
//Approach: on init, create an array to represent the available slots remaining in each of the car types big , medium , and small. 
//Use the carType integer as the key to the array entry for instant lookup
//and modification. 


class ParkingSystem { 
	constructor(big,medium,small){
		this.slots = [null,big,medium,small]
	}
	addCar(carType){
		if(this.slots[carType] == 0) return false;
		this.slots[carType]--;
		return true;
	}
}

//Leetcode Results
// 103ms	|	57.61mb
// 90.72%	|	9.28%
