// This program returns the highest and lowest numbers when given an array of integers.
// It can't use Math.max() or the Math.min()

// Function to fin the minimum number from an array
function minInteger(arr) {
    let minNum = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < minNum){
            minNum = arr[i]
        }
    }
    return minNum    
}

// Function to find the maximum number of an array
function maxInteger(arr) {
    let maxNum = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxNum){
            maxNum = arr[i]
        }
    }
    return maxNum    
}


// Get the array form the command line using Deno.args.
let inputArg = Deno.args[0].replace('[', '').replace(']', '').replace(/ /g, '').split(',')
let inputArray = inputArg.map(x => parseInt(x))


// Call the min and max functions and log the values to the console
let minMax = [minInteger(inputArray), maxInteger(inputArray)]
console.log(minMax)