

let productOne = {
    productName : `tasbee`,
    basePrice : 180,
    discount : 7,
    totalReview : 6,
    rating:4.9,
}
let productTwo = {
    productName : `javascript book`,
    basePrice : 375,
    discount : 25,
    totalReview : 7,
    rating:3.4,
}
let productThree = {
    productName : `calculator`,
    basePrice : 1020,
    discount : 5,
    totalReview :8,
    rating:4.6,
}
let productFour = {
    productName : `Ator`,
    basePrice : 75,
    discount : 12,
    totalReview :10,
    rating:4.5,
}

let shoppingCart = [productOne,1,productTwo,5,productThree,2,productFour,8];

let count = 1;
let totalQty = 0;
let totalPrice = 0;
for(let x = 0; x < shoppingCart.length; x= x+2){
    console.log(`${count++}. Product Name: ${shoppingCart[x].productName} | Baseprice: ${shoppingCart[x].basePrice} | discount: ${shoppingCart[x].discount}% | total review: ${shoppingCart[x].totalReview} | Rating: ${shoppingCart[x].rating} | Quantity: ${shoppingCart[x+1]} | After Discount Price:${shoppingCart[x].basePrice - (shoppingCart[x].discount * shoppingCart[x].basePrice)/100}` )

    totalQty = totalQty + shoppingCart[x+1];
    totalPrice = totalPrice + ((shoppingCart[x].basePrice - (shoppingCart[x].discount * shoppingCart[x].basePrice)/100)*shoppingCart[x+1]);
}
console.log(`total item purched: ${totalQty}`);
console.log(`total price: ${totalPrice}`);
console.log(`Thank you for purched our product`);
