// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
 const x = function (drivers) {
   return drivers.slice(0,2)
 }
 return x(drivers)
 }

 function returnLastTwoDrivers(drivers) {
  const x = function (drivers) {
    return drivers.slice(2,4)
  }
  return x(drivers)
  }

function selectingDrivers(drivers) {
  let x = []
  x.push(returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers))
  return x
}
