// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())

}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function fuzzyMatch(drivers, string){ 
    return drivers.filter(driver => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)


    
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
    
}