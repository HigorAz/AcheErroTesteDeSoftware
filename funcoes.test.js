const {countToTen} = require("./funcao1.js");
const {addNumbers} = require("./funcao2.js");
const {findLargestNumber} = require("./funcao3.js");

test ('contagem até 10', () => {
    expect(countToTen()).toBe(10)
});

test ('Adicao de numeros', () => {
    expect(addNumbers(1,2)).toBe(3)
});

test ('Encontrar o maior número', () => {
    expect(findLargestNumber([-1,-2,-3,-4])).toBe(-1)
});

