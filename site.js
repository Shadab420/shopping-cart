//getting html elements
const incrementQuantityBtnList = document.querySelectorAll(".increment-quantity-btn");
const decrementQuantityBtnList = document.querySelectorAll(".decrement-quantity-btn");

// get all single product price
var prices = [];
var p = document.querySelectorAll(".price");
for(var i=0; i<p.length; i++) prices.push(parseInt(p[i].innerText));


// adding event listeners to html elements
function quantityIncrementOrDecrement(serial, type){
    const quantityElement = document.querySelectorAll(".quantity")[serial];
    const priceElement = document.querySelectorAll(".price")[serial];
    const singlePrice = prices[serial];
    const subTotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");

    var quantityValue = parseInt(quantityElement.value);
    var priceValue = parseInt(priceElement.innerText);
    var subTotalValue = parseInt(subTotalElement.innerText.replace(",",""));
    var taxValue = parseInt(taxElement.innerText);
    var totalValue = parseInt(totalElement.innerText);
    

    if(type === "inc") 
    {
        quantityValue++;
        priceValue += singlePrice;
        subTotalValue += singlePrice;
    }
    else if( quantityValue > 1){
        quantityValue--; 
        priceValue -= singlePrice;
        subTotalValue -= singlePrice;
    }

    totalValue = subTotalValue + taxValue;

    quantityElement.value = quantityValue;
    priceElement.innerText = priceValue;
    subTotalElement.innerText = [subTotalValue.toString().slice(0,1), ",", subTotalValue.toString().slice(1)].join("");
    totalElement.innerText = [totalValue.toString().slice(0,1), ",", totalValue.toString().slice(1)].join("");
    
}


// increment product quantity

incrementQuantityBtnList[0].addEventListener("click", ()=>{
    quantityIncrementOrDecrement(0, "inc");
    
});

incrementQuantityBtnList[1].addEventListener("click", ()=>{
    
    quantityIncrementOrDecrement(1, "inc");
    
});



//decrement product quantity.


decrementQuantityBtnList[0].addEventListener("click", ()=>{
    quantityIncrementOrDecrement(0, "dec");

});

decrementQuantityBtnList[1].addEventListener("click", ()=>{
    quantityIncrementOrDecrement(1, "dec");
});


