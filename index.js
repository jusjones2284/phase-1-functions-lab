// Code your solution in this file!
function distanceFromHqInBlocks(startingPoint){
    return Math.abs(startingPoint - 42)
    


}

const nelly = distanceFromHqInBlocks(50)

console.log(nelly)

function distanceFromHqInFeet(startingPoint){
    return Math.abs(startingPoint - 42) * 264

}

function distanceTravelledInFeet(startingPoint, dropLocation){
    return Math.abs(startingPoint - dropLocation) * 264

}

const lox = distanceTravelledInFeet();
console.log(lox)

function calculatesFarePrice(start, destinaiton){
    const feet = Math.abs(start  - destinaiton) *264

    if (distanceTravelledInFeet(start, destinaiton) < 400){
        return 0;
    }
    else if (
        distanceTravelledInFeet(start, destinaiton) > 2000 && distanceTravelledInFeet(start, destination)< 2000){
            return 2.56;
        }
    else if(distanceTravelledInFeet(start, destinaiton) < 2500){
        return 2.56;
    }
    else if (feet > 2000 && feet < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(start,destination) < 2500){
        return "cannot travel that far";
    }
}
