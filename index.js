// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
 const x = function (drivers) {
   return drivers.slice(0,2)
 }
 return x(drivers)
 }

const returnLastTwoDrivers =  function (drivers) {
  const x = function (drivers) {
    return drivers.slice(2,4)
  }
  return x(drivers)
  }

function selectingDrivers(drivers) {
  let x = []
  x.push(returnFirstTwoDrivers(), returnLastTwoDrivers())
  return x
}

const createFareMultiplier = function (x) {
  return x*x
  
}