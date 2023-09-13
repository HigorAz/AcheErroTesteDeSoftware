// Adicione numeros negativos
/*function findLargestNumber(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }*/

/*A função acima define largest como 0, dessa forma, quando passamos somente números negativos no array, 
recebemos o 0 definido como maior, para resolver isso, definimos largest como o primeiro número do array*/

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([-4,-2,-3,-1,-5]));

module.exports = {
  findLargestNumber
}