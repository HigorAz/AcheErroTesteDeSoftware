/*function countToTen() {
  let i = 1;
  while (i < 10) {
    console.log(i);
  }
}

countToTen()*/

//No exemplo acima a função não possui um contador

function countToTen() {
    let i = 1;
    while (i < 10) {
      console.log(i);
      i++;
    }
    return i;
  }

  countToTen()

  module.exports = {
    countToTen
  }