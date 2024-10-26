var categorydata=[]
var allproducts=[]
document.addEventListener('DOMContentLoaded', () => { 

 var product=[];

 fetchcategory()
  re()
         
        


        

            




        fetch('http://localhost:3000/product/fetch_product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({categoryname:userna,picture:sp[index-1]}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(data => {
            // fetchcategory=data.data 
            console.log('Successseeeeeeeeeeeeeeeeeeeeeeeeeeee:', data.data);
            allproducts=data.data
            
            var resultproduct = "";
        data?.data?.map((item)=>{
            
        resultproduct +=`  <div class="containerA" id="${item.productid}"  onclick="opennextpage(${item.productid})"><img src="http://localhost:3000/images/${item.picture}" alt=""></div>`;
        })
        AA.innerHTML=resultproduct;

        });
       
    
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error")
        });


    // var product=[{productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:11, price:"120",offerprice:"99", rating:"4.2", modelno:""},
    //     {productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:12, price:"120",offerprice:"99", rating:"4.2", modelno:""},
    //     {productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:13, price:"120",offerprice:"99", rating:"4.2", modelno:""},
    //     {productname:"Margeita", productpicture:"seafood-pizza.jpg", productid:14, price:"120",offerprice:"99", rating:"4.2", modelno:""}
    // ]
  
  console.log("ppppppppppppppppppppppppppppppppppppppp:",product)
       
  function changepagetoproductbycategory(item)
{
      window.location.href=`file:///D:/ecommercepagetem/Pages/menupage.html?categoryid=${item}`
}

function searching()
{
    console.log("searching data in variable:",allproducts)
    var newallproduct=allproducts.filter((item)=>{
        return item.productname.includes(sear.value)
    })

    var resultproduct = "";
    newallproduct.map((item)=>{
        
    resultproduct +=`  <div class="containerA" id="${item.productid}"  onclick="opennextpage(${item.productid})"><img src="http://localhost:3000/images/${item.picture}" title=${item.productname} alt=""></div>`;
    })
    AA.innerHTML=resultproduct;

    console.log("searching data after modify:",newallproduct)
}

function re()
{
    var user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):-1
    if(user.length>=0)
    {
        homepageloginwrite.innerHTML = `<i class="fa-solid fa-user"></i>`
    }
}

function cart()
{
    window.location.href="file:///D:/ecommercepagetem/Pages/addtocart.html"
}





function opennextpage(item){
    var productdatabyid;
    alert(item)
    console.log("ddddddddddddddddsssssssssssssss:",item)
    // window.location.href="file:///D:/ecommercepagetem/Pages/restraunt.html?";

    fetch('http://localhost:3000/product/fetch_product_by_id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({productid:item}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        // productdatabyid=data.data 
        const itemData = encodeURIComponent(JSON.stringify(data?.data[0]));
        window.location.href=`file:///D:/ecommercepagetem/Pages/restraunt.html?productData=${itemData}`;

        // console.log('Success:', productdatabyid);
        
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });
            // document.getElementById("productdetailsname").innerHTML="pizzzzzzzz"

   
}

    function login()
    {
        window.location.href="file:///D:/ecommercepagetem/Pages/loginpage.html"
    }

    function fetchcategory()
    {
        fetch('http://localhost:3000/category/fetch_category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({emaildid:useremailidl.value,password:userpasswordl.value}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(data => {
            // productdatabyid=data.data 
            
            console.log('Successaaaaaaaaaaaaaaaaaxxxxxxxxxxxx:', data.data);
            if(data.status)
            {   
                // var category = [{categoryname:"PIZZA", categorypicture: "seafood-pizza.jpg", categoryid:22},
                //     {categoryname:"SALAD", categorypicture: "salad.png", categoryid:23}, 
                //     {categoryname:"RICE", categorypicture: "curry-fried-rice.jpg", categoryid:24},];
            var result = "";
            data.data.map((item)=>{
            result+=` <div class="containerA" id="${item.categoryid}" onclick="changepagetoproductbycategory(${item.categoryid})">
            <img src="http://localhost:3000/images/${item.image}" alt="">
            </div>`;
            })

    container1.innerHTML=result;




                // alert("Login Successfully")
                // localStorage.setItem("user",JSON.stringify(data.data))
                
                // window.location.href="file:///D:/ecommercepagetem/Pages/loginpage.html"


            }else
            {
                alert(data.status)
            }
            
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error")
        });
    }

    



function userdatasubmit()
{
    
    if(username.value.trim() && useremailid.value.trim() && userpassword.value.trim() && address.value.trim())
    {
        fetch('http://localhost:3000/user/submit_userdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username:username.value,emaildid:useremailid.value,password:userpassword.value,address:address.value}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        })
        .then(data => {
            // productdatabyid=data.data 
            
            console.log('Success:', data.data);
            if(data.status)
            {
                alert("Your Data has been submitted Successfully")
                username.value=''
                useremailid.value="" 
                userpassword.value=""
                address.value=""
                window.location.href="file:///D:/ecommercepagetem/Pages/loginpage.html"


            }else
            {
                alert(data.status)
            }
            
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error")
        });
    }
    else{
        alert("Please Fill All Field.")
    }
    
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