class SeatManager { 
    constructor(n) {
        this.seats = Array(n+1).fill("unreserve");
        this.seats[0] = "SeatManager"
        this.seat = 1;
    }
    reserve(){
        if(this.seat == this.seats.length){
            this.seat = 1
        }
        //until we encounter an unreserved seat
        while(this.seats[this.seat] == "reserved" 
        && this.seat < this.seats.length){
            this.seat += 1;
        }
        //first free seat we see 
        this.seats[this.seat] = "reserved"
        this.seat += 1; 
        return this.seat-1;
        
    }
    unreserve(seatNumber){
        this.seats[seatNumber] = "unreserved"
        //only update the seat if the unreserved seat is 'before' the currently marked available seat. 
        if(seatNumber < this.seat){
            this.seat = seatNumber
        }
    }
}

//tested on leetcode: NOTE: i should revisit this problem again and see how I can make it more efficient
//      3076ms      |       116.07mb
//      11.61%      |       41.86%

