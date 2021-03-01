'use strict';

class Room{

    constructor() {
        this.available = true;
    }

    const name = new HashTable({"Slytherin": 1, "Hufflepuff": 2, "Gryffindor": 3, "Ravenclaw": 4 });

 setName = (key, value) => {};
 getName = key =>{
     return "";
 };

const 


    isAvailable() {
        this.available = true
        return 'This room is available';
    }

    isUnavailable() {
       this.available = false
        return 'This room is unavailable';
    }

   
   entered() {
    return this.isUnavailable();
   }

   exited() {
       return this.isAvailable();
   }

    occupied() {
        throw new Error("This room is occupied: Access denied");
    }

    getId() {
        return 
    }

}