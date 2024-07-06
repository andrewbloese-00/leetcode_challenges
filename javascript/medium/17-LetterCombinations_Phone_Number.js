function letterCombinations([d,...digits]) {
	//Base Case: No digits left
	if(!d) return []

	//recursively build combinations
    let combos = letterCombinations(digits)
    combos = combos.length? combos : [""]
    return lookup[d]
		.map(possible=>combos.map(combo=> possible+combo))
		.flat();

};
