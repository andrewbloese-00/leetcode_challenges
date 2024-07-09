
function averageWaitTime(customers){
	let t = 1, i = 0, sum = 0;
	while(i < customers.length){
		const [arrival,cookTime] = customers[i]
		if( t >= arrival) { //serve one customer at a time
			t+= cookTime;
			sum += (t-arrival);
			i++;//serve next customer
		} else { //wait for customer
			t++;
		}
	}
	return sum / customers.length;
}
