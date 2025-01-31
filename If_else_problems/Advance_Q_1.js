var productPrise = 150;

if(productPrise > 500){
    var discountPrice = productPrise * 0.2;
    var finalPrice = productPrise - discountPrice;
    console.log("You have got 20% discount your final productprise is " + finalPrice )
}else if(productPrise >=200){
    if(productPrise < 501){
        var discountPrice = productPrise * 0.1;
        var finalPrice = productPrise - discountPrice;
        console.log("You have got 10% discount your final productprice is " + finalPrice);
    }else{
        console.log("No discount for you");
    }
}else{
    console.log("No discount for you");
}