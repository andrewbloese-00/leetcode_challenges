
function canConstruct(note,magazine){
	
	//immediate fail when note is longer than magazine
	if(note.length > magazine.length) return false;


	//make sure only characters in magazine are used for every char 
	// in the note.
	for(let i = 0; i < note.length; i++){
		let available = magazine.indexOf(note.charAt(i))
		if(available < 0) return false;
		//remove char from magazine to prevent future use
        magazine = (
			magazine.substring(0,available) +
			magazine.substring(available+1)
		);
	}

	return true;
}

//leetcode results
//64ms		|	49.06mb
//90.16%	| 	8.48%

