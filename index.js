// Add your functions here
function map(array, func = function(a){ return a}){
    let newArray = []
    array.forEach(element =>{
        let newElement = func(element)
        newArray.push(newElement)})
        return newArray
}


function reduce(array, func = function(a = 0, b = 0){ return a + b}, startingValue){
    // if there is a starting value, set it at the starting value, else set it to the value of the first
    // element of the array
    let results = (!!startingValue) ? startingValue : array[0]
    // i is going to start at 0 if there is a starting value, and it wills tart at 1 otherwise
    // this is because results already equal the value of the first element of the array if there is
    // no starting value, so you want to start on the second
    for (let i = (!!startingValue) ? 0 : 1; i < array.length; i++) {
        // results will be changed to the value of running the function on whatever element of the array, given 
        // results(which if not given any will be the value of the first element of the array), making it equal the // cumulative value of every element of the array being passed through the function
      results = func(array[i], results)
    }
    //? I want to know how this works when looking for either true or false, though
  
    return results;
}