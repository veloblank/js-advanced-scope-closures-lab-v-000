function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let start = parseInt(startPoint);
    let end = parseInt(endPoint);
    let trip = Math.abs(start - end);
    let difference = blockRange - trip;

    if (difference > 0){
      return `within range by ${difference}`;
    }else{
      return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip;
  }
}

//createDriver() was not tested for in mocha, but the following
//function would construct a driver that the README was asking for.
//All test lights passed, but mocha did not test for the createDriver function.

// function createDriver(){
//   let driverId = 0
//   return class {
//     constructor(name){
//       this.name = name
//       this.id = ++driverId
//     }
//   }
// }
