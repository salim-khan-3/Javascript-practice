let shoppingCart= [
    'tasbee',
    180,
    7,
    'javascript book',
    400,
    25,
    'love story',
    1020,
    5,
]

for(let i = 0; i< shoppingCart.length; i = i +3){
    console.log(`Name: ${shoppingCart[i]}`);
    console.log(`total product Price: ${shoppingCart[i + 1]}`);
    console.log(`discount: ${shoppingCart[i + 2]}%`);
    console.log(`final price : ${shoppingCart[i+1] - (shoppingCart[i+1]*shoppingCart[i+2])/100}`);
}