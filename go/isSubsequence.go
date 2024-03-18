func isSubsequence(s string, t string) bool {
	mc,n := 0 , len(s)
	for i,_ := range t {
		if t[i] == s[mc] { mc+=1 }
		if mc == n { return true } 
	}
	return mc == n
}
