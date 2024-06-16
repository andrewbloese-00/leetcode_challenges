function instanceOf(obj,classFunc){
	//'walk' up the prototype chain until a match is found
	while(obj != null) {
		if ( obj.constructor == classFunc) return true 
		obj = Object.getPrototypeOf(obj)
	}

	//no match, not instance
	return false
}
