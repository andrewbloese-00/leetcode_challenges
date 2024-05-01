func reversePrefix(word string, ch byte) string { 
	var end int
	for end = 0; end < len(word); end+=1 {
		if word[end] == ch {
			break
		}
	}
	
	//ch not found, do nothing
	if end >= len(word) { 
		return word
	}

	st, resume := "",end + 1
	//reverse the 'prefix'
	for end >= 0 {
		st += string(word[end])
		end -= 1
	}

	//add rest of the word
	for resume < len(word){
		st += string(word[resume])
		resume += 1
	}
	return st
}
