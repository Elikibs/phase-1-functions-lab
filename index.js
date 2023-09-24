// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - 42)}
    distanceFromHqInBlocks(43)
    distanceFromHqInBlocks(50)
    distanceFromHqInBlocks(34) 


function distanceFromHqInFeet(blocks){
   return Math.abs(blocks - 42) * 264
}
    distanceFromHqInFeet(43)
    distanceFromHqInFeet(50)
    distanceFromHqInFeet(34)


function distanceTravelledInFeet(start, dest){
    return Math.abs(dest - start) * 264
}
    distanceTravelledInFeet (43,48)
    distanceTravelledInFeet (50,60)
    distanceTravelledInFeet (34,28)


function calculatesFarePrice(start, dest){
    const distance = dest - start
    const distanceM = Math.abs(distance*264)
    if (distanceM<=400){
        return 0 
        }
    
    else if ( distanceM >400 && distanceM <=2000){
        return (distanceM - 400)*0.02
        }

    else if (distanceM>2000 && distanceM<=2500){
        return 25
    }

    else {return "cannot travel that far"}
}
    calculatesFarePrice(34, 32)
    calculatesFarePrice(50, 58)
    calculatesFarePrice(34, 24)