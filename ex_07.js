fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];



let index = 5

function getFruitByIndex(index) {



    if (index === -1) {
        return fruits[fruits.length - 1];
    }
    
    else if (index < 0 || index >= fruits.length) {
        return null;
    }
    
    else {
        return fruits[index];
    }
}

console.log(getFruitByIndex(index));    
