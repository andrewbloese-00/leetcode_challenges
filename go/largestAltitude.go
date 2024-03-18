func largestAltitude(gain []int) int {
	n, a,ma := len(gain), 0,0
	for i:= 0; i < n; i+=1 {
		a+=gain[i]
		if a > ma { ma = a } 
	}
	return ma
}
