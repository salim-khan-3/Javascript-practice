/*listener with square start*/
var containerBgChange = document.getElementById(`container_wrapper`);
var squareContainer = document.getElementById(`square_container`);

/*add or remove container styl*/
squareContainer.addEventListener(`click`,function(){
    containerBgChange.classList.toggle(`changeBackground`)
});


/*listener with square end*/


var cartItem = document.getElementById(`btn2_number`);
var incDecContainer = document.getElementById(`wrappper_container`)
var createNewElement = document.createElement(`p`);
incDecContainer.appendChild(createNewElement);

var count =Number(cartItem.innerText);
var discountPrice = 245;
var mainPrice = 350;
var finalPriceWithDiscount = document.getElementById(`discount_price`);
var priceWithOutDis = document.getElementById(`without_discount`);

function increaseCount(){
    if(count ===5 ){
        createNewElement.innerText = `you can purchase only five product!!!!`;  
        setTimeout(removeNoticeMessage,1000);
        return;   
    }
    count++;
    finalPriceWithDiscount.innerText = `${count*discountPrice} TK.`
    priceWithOutDis.innerText = `${count*mainPrice} TK.`
    cartItem.innerText = count;
    removeNoticeMessage()
}

function decreaseCount(){
    if(count === 1 ){
        createNewElement.innerText = `Product can't be less than one!!!!`; 
        setTimeout(removeNoticeMessage,1000);
        return;    
    }
    count--;
    finalPriceWithDiscount.innerText = `${count*discountPrice} TK.`
    priceWithOutDis.innerText = `${count*mainPrice} TK.`
    cartItem.innerText = count;
    removeNoticeMessage()
}

function removeNoticeMessage(){
    createNewElement.innerText = "";
}