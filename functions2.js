console.log('working');

const seatsInCar = 8;
let passengers = [];
let tankFull = true;

function enoughSeats(){
 console.log('in enoughSeats');
 //check if seatsInCar >= passengers)
 if(seatsInCar >= passengers.length){
    return true;
    }//end enough seats
    else{
        return false;
    }//end not enough seats
}//end enoughSeats

function getInCar(nameOfPassenger){
    //nameOfPassenger is an arguement we are putting into the function ^^ (it is receiving an arguement.)
    console.log('in getInCar', nameOfPassenger);
    //This is console logging any arguements recieved ^^
    //push this new passenger into out passengers array vv
    passengers.push(nameOfPassenger);
    //remember passengers is out existing empty array ^^
    return passengers;
}//end getInCar

function readyForRoadTrip(){
    console.log('in readyForRoadTrip');
    if (enoughSeats() && tankFull){
        return true;
    }//end all good
    else{
        return false;
    }//end not ready
}//end readyForRoadTrip

getInCar('You');
getInCar('Mom');
getInCar('Dad');
getInCar('Myron');
getInCar('Megan');
getInCar('Chris');
getInCar('Ryan');
getInCar('Carly');
//so these are names we are replacing the arguement with. Typed just as the function is displayed.
//These will be put into the array passengers.

console.log('do we have enought seats?', enoughSeats());

console.log('are we ready for the trip?', readyForRoadTrip());