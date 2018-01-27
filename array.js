function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [array, ...element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
 return array.unshift[element] // add element to the beginning of the array by mutating the array
}

function addElementToEndOfArray(array, element) {
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element)

  return array
}

function accessElementInArray(array, index) {
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

}

function removeElementFromBeginningOfArray(array) {
}

function destructivelyRemoveElementFromEndOfArray(array) {

}

function removeElementFromEndOfArray(array) {

}
