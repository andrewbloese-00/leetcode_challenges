//helper function to return the absolute value of the provided integer
func Abs(num int) int {
    if num < 0 {
        return -num
    } else { 
        return num
    }
}

func findMaxK(nums []int) int {
    //use a map to track which elements we have seen 
	max,seen := 0, make(map[int]bool)
    for _ , num := range nums { 
        _,hasPartner := seen[-num]
        if hasPartner { //seen its opposite?
            abs := Abs(num)
            if abs > max { max = abs}
        } else { 
            seen[num] = true
        }
    }
	//max not changed, no pair found
    if max == 0 { 
        return -1
    } else { // largest pair found
        return max
    }
}
