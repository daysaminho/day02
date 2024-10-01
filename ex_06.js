fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

let fruitName = "Banana"

function findFruitsIndex(fruitName) {
let index = fruits.indexOf(fruitName)

if (index === -1) {
return null ;
} else {
return index

}
}

function displayResult(result) {
    console.log(result);
}

displayResult(findFruitsIndex(fruitName))
