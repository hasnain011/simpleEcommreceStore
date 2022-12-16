// Home page navbar humburger menue listner code
const navbar = document.getElementById('navbar');
const humburger = document.getElementById('humburger');
const close = document.getElementById('close');

if(navbar){
    humburger.addEventListener('click', () =>{
    navbar.classList.add('active');
    humburger.classList.add('active');

    })
}

if(navbar){
    close.addEventListener('click', () =>{
    navbar.classList.remove('active');

    })
}

// humburger.addEventListener('click', () =>{
//     navbar.classList.add('active');
//     humburger.classList.add('active');
//     })
    
//     close.addEventListener('click', () =>{
//     navbar.classList.remove('active');
//     })
 // --------------------- navbar humburger menue listner code End here------------------------------ 

//  Shop-page single product image show listner code
// let mainImg = document.getElementById('mainImg');
// let smallImg = document.getElementsByClassName('small-img');
// smallImg[0].onclick = function(){
//     mainImg.src = smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     mainImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     mainImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = function(){
//     mainImg.src = smallImg[3].src;
// }


//  -----------------Shop-page single product image show listner code End here---------------------------



// Add to cart functionalities

// remove cart Items
let removeCartItem = document.getElementsByClassName("remove")
console.log(removeCartItem);
for (let i = 0; i < removeCartItem.length; i++){
    let btn = removeCartItem[i];
    btn.addEventListener("click",function(event){
      let btnClicked = event.target;
      btnClicked.parentElement.parentElement.remove();
      console.log("removeCartItem");
    })
    updateCartTotal()
}

// cart total 
function updateCartTotal(){
 let cartItemContainer = document.getElementsByClassName("cartItems")[0]
 let CartRowsItems = cartItemContainer.getElementsByClassName("cartRow")
 let total = 0;
 for (let i = 0; i < CartRowsItems.length; i++){
    let cartRow = CartRowsItems[i];
    let priceElement = cartRow.getElementsByClassName('cartPrice')[0]
    let quantityElement = cartRow.getElementsByClassName('cartQuantity')[0]
    console.log(priceElement,quantityElement)
    let price = parseFloat(priceElement.innerText.replace('$',''))
    console.log(price)
    let quantity = quantityElement.value;
    total = total + (price * quantity);
    console.log(total)


 }
 

}
