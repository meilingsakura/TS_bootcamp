const inventoryItemA = {
    id: 101,
    name: "A", 
    price: 10,
}

const inventoryItemB = {
    id: 102,
    name: "B", 
    price: 20,
}

const inventoryItemC = {
    id: 102,
    name: "C", 
    price: 20,
}

const inventoryItemD = {
    id: 103,
    name: "D", 
    price: 20,
}

const inventoryItems = [inventoryItemA, inventoryItemB, inventoryItemC];


inventoryItems.push (inventoryItemD);

let positionFound1: number = 0;
let positionFound2: number = 0;

for (let i = 0; i<inventoryItems.length; i++){
    if (inventoryItems[i].id===102){
        positionFound1 = i;
    }
}

inventoryItems.splice(positionFound1,1);

for (let i = 0; i<inventoryItems.length; i++){
    if (inventoryItems[i].id===103){
        positionFound2 = i;
    }
}

inventoryItems[positionFound2].price = 30;

for (let i = 0; i < inventoryItems.length; i++){
    for (let key in inventoryItems[i]){          
        console.log("The key " + key + " has value " + inventoryItems[i][key]);
                  
    }    
}

/*  FORMA ALTERNATIVA DE RESOLVER LA LLAMADA

for (let item of inventoryItems){
    for (let key in item){
        console.log(`The key ${key} has value ${item[key]}`);
    }
}

*/
