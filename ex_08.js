fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];


let FruitOrIndex = "Kiwi"



function getFruitoriNdex(FruitOrIndex) {
    
    if (typeof FruitOrIndex === 'string') {
        const index = fruits.indexOf(FruitOrIndex); 
        return index !== -1 ? index : null;  
    }
    
    else if (typeof FruitOrIndex === 'number') {
        if (FruitOrIndex === -1) {
            return fruits[fruits.length - 1]; 
        } else if (FruitOrIndex < 0 || FruitOrIndex >= fruits.length) {
            return null; 
        } else {
            return fruits[FruitOrIndex]; 
        }
    }
    return null
}


console.log(getFruitoriNdex(FruitOrIndex));   
