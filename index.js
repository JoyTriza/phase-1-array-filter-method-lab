const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby', "saMmy"]

function findMatching(param, param1){
    let newDrivers = [];
    param.forEach(driver => {
        if(driver.toUpperCase() === param1.toUpperCase()){
            newDrivers.push(driver)
        }
    });
    return newDrivers;
}

// console.log(findMatching(drivers, "Bobby"))

function usingArray(param, param1){
    let myThird = [];
    for(let i = 0; i < param.length; i++){
        if(param[i].toUpperCase() === param1.toUpperCase()){
            myThird.push(param[i])
        }
    }

    return myThird;
}

// console.log(usingArray(drivers, "saMmY"))


function fuzzyMatch(myDriversArr, driverNameToCompare){
    let results =  myDriversArr.filter(
        (driver) => 
        driver.toLowerCase().indexOf(driverNameToCompare.toLowerCase()) === 0
    );
    return results;
}
console.log(fuzzyMatch(drivers, "Sammy"))