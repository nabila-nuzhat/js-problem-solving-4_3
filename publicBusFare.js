/**publicBusFare.js
 * capacity 11 person in Micro, 50 persons in Private Bus
 * if remaining: will go to Public Bus; fare 250 tk each
 * micro has to be filld to max capacity, otherwise wont go
 * 
 * function to calculate Public bus fair 
 * 
 * 
 * 
 * ex:
 * 365---> 
 * my draft condition summary is (Total % 50) % 11 < 11 && (Total % 50) % 11 > 0
 * 
 */

// showed in video
function publicBusFare(participants){
    if(typeof participants != 'number'|| participants < 50){
        return "Enter valid partcipants!";
    }
    
    let busCapacity = 50;
    let microCapacity = 11;
    let remaining = 0;
        // After callvulating the amount of people who can travel by Private Bus 
        // value of of remaining will be:
        remaining = participants % busCapacity;
        console.log(remaining);

        // After callvulating the amount of people who can travel by Micro Bus 
        // value of of remaining will be:
        remaining = remaining % microCapacity;
        console.log(remaining);

        let costofPublicBus = remaining * 250;
        return costofPublicBus;
}


console.log(publicBusFare(365));


// My own draft condition function--check
function publicBusFareMy(total) {
    if(typeof total != 'number'|| total < 50){
        return "Enter valid partcipants!";
    }

let publicBusPassenger = ((total % 50) % 11);
    if(publicBusPassenger < 11){
        return publicBusPassenger * 250;
    }
}

console.log(publicBusFareMy(365));
console.log(publicBusFareMy(50));
console.log(publicBusFareMy(114));
console.log(publicBusFareMy(48));