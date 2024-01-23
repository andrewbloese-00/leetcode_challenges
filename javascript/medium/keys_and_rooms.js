/*
 Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

 Approach: Utilize depth first search to see all reachable rooms via room "0". If all reachable nodes is all nodes from rooms, the return true. 
*/


function canVisitAllRooms(rooms){
	//track the visited rooms - initially false for all
	const visited = Array(rooms.length).fill(false)
	
	//use dfs to determine reachable rooms
	function searchRoom(room){
		visited[room] = true; 
		for(let roomKey of rooms[room])
			if(!visited[roomKey]) searchRoom(roomKey)
	}
	//start the search at room 0, as we are given its key at the start
	searchRoom(0);
	
	//every entry in visited should be true if we can visit all 
	return visited.every(Boolean)
}




// Leetcode results 
// 54ms 	|	50.40mb
// 72.54%	|	5.21%

