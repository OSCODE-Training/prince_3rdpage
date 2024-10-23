document.addEventListener('DOMContentLoaded', () => { 

    var category = [{categoryname:"PIZZA", categorypicture: "seafood-pizza.jpg", categoryid:22},
        {categoryname:"SALAD", categorypicture: "salad.png", categoryid:23}, 
        {categoryname:"RICE", categorypicture: "curry-fried-rice.jpg", categoryid:24},];
var result = "";
category.map((item)=>{
result+=` <div class="containerA" id="${item.categoryid}">
<img src="../assets/${item.categorypicture}" alt="">
</div>`;
})

container1.innerHTML=result;

    var product=[{productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:11, price:"120",offerprice:"99", rating:"4.2", modelno:""},
        {productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:12, price:"120",offerprice:"99", rating:"4.2", modelno:""},
        {productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:13, price:"120",offerprice:"99", rating:"4.2", modelno:""},
        {productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:14, price:"120",offerprice:"99", rating:"4.2", modelno:""}
    ]
    var resultproduct = "";
product.map((item)=>{
resultproduct +=`  <div class="containerA" id="${item.productid}"  onclick="opennextpage()"><img src="../assets/${item.productpicture}" alt=""></div>`;
})
AA.innerHTML=resultproduct;

});

function opennextpage(){
    window.location.href="http://127.0.0.1:3000/Pages/restraunt.html";
}

// function opennextpage(){
//     window.location.href="http://127.0.0.1:3000/Pages/restraunt.html";
// }
// function fetchcategory(){
//     var category = [{categoryname:"PIZZA", categorypicture: "seafood-pizza.jpg", categoryid:22},
//                     {categoryname:"SALAD", categorypicture: "salad.png", categoryid:23}, 
//                     {categoryname:"RICE", categorypicture: "curry-fried-rice.jpg", categoryid:24},];
//         var result = "";
//     category.map((item)=>{
//         result+=` <div class="containerA">
//             <img src="../assets/${item.categorypicture}" alt="">
//         </div>`;
//     })

//     container1.innerHTML=result;
//                 }