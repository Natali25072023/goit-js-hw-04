function makeArray(firstArray, secondArray, maxLength) {
    let summArray = firstArray.concat(secondArray);
    if (summArray.length > maxLength) {
        summArray=summArray.slice(0, maxLength);
    }
    return summArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2))
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));