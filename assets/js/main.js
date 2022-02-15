// ---------1.1 forEach()---------------
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
getraenke.sort()
console.log(getraenke);
getraenke.forEach(function(myDrinks){
    document.write("<p>" + myDrinks)
})
// ---------1.2 map()---------------
let getraenke2 = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]
let upperDrinks = getraenke2.map(up => {
    console.log("test");
    return up.toUpperCase()
})
console.log(upperDrinks);
// ---------1.3 map()---------------
let array = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];
console.log(array);
let multiSort = array.map(function(x){
    return x * 2
})
multiSort.sort((a, b) => a - b)
console.log(multiSort);
// ---------1.5 forEach()---------------
let checkNumber = [18,16,80,51,47,38,95,42,68,61,34,51,20,17,56,31,100,6,5,30,74,97,28,99,91,27,73,12,92,6,27,71,26,15,78];
console.log(checkNumber);
checkNumber.forEach(y => {
    if (y % 3 == 0) {
        console.log(y + 100);
    } else {
        console.log("nicht durch 3 teilbar: " + y);
    }
})