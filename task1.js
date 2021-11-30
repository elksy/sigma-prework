// This program calculates the age between the current date and a given date.

//const inputArg = '1990-01-01'
let inputArg = Deno.args[0]

// Gets the current date in milliseconds since 1970
const currentDate = Date.parse(new Date())

// Gets the input date in milliseconds since 1970
const givenDate = Date.parse(new Date(inputArg))

// Calculate the difference between the two dates. Minus 1970 as each date is milliseconds since 1970. 
const difference = (new Date(currentDate - givenDate).getUTCFullYear()) - 1970


console.log(difference)