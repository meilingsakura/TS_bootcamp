//Exercise 3: product catalog

const product = {
    id: 1000,
    name: "AA", 
    price: 1,
    tags: ["product","catalog"],
};

let productCopy = {...product, archivedTags: [...product.tags]}


productCopy.name = "Updated Product";
productCopy.price = 150;
productCopy.tags = ["updated", "discounted"];


console.log("Product:", product);
console.log("New Product:", productCopy);
