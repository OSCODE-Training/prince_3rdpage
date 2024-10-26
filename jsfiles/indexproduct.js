




document.addEventListener('DOMContentLoaded', () => { 
    // URL se parameters hasil karna
    let value = JSON.parse(localStorage.getItem('cart'))?.length;
    document.getElementById("carticonvalue").innerHTML = value?value:0
   
    let datafetchfromlocalstoage = JSON.parse(localStorage.getItem('cart'));
    let cond =false
    
    const urlParams = new URLSearchParams(window.location.search);
    const productData = urlParams.get('productData');

    // JSON string ko object me convert karna
    const itemName = JSON.parse(decodeURIComponent(productData));
    let valuee = 0
    datafetchfromlocalstoage?.forEach(item => {
        if(item.productid==itemName.productid)
        {
            valuee++
            cond =true
        }
    });

    if(cond)
    {
        document.getElementById("btnincrease").innerHTML=`<div style="display:flex;width:100px;justify-content:space-between;"><div><div style="cursor:pointer" onclick="minus()"><i class="fa-solid fa-minus"></i></div></div><div>${valuee}</div><div style="cursor:pointer" onclick="plus()"><i class="fa-solid fa-plus"></i></div></div>`
    }
    re()



    
    console.log("ewawwwwwwwwwwwwwwwwwwwwwwwww:",itemName)
     document.getElementById("productdetailsname").innerHTML=`<span>${itemName.productname}</span>/<span>${itemName.categoryname}</span>`
     document.getElementById("detailsofproduct").innerHTML=`<span>Model no. ${itemName?.modelno}</span>/<span>color ${itemName?.color}</span>/<span>Stock ${itemName?.stock}</span>/<span>Rating ${itemName?.rating}</span>`
     document.getElementById("priceshow").innerHTML=`<span style="margin-right: 20px;">Price &#8377;<s>${itemName?.price}</s></span><span>&#8377;${itemName?.offerprice}</span>`


    })

    function addtocart()
    {
        let predata = JSON.parse(localStorage.getItem('cart'))
        // console.log("predata:",predata.length)
        var cart = [];
        if(predata?.length>0)
        {
            cart.push(...predata)
        }
        const urlParams = new URLSearchParams(window.location.search);
    const productData = urlParams.get('productData');

    
    // JSON string ko object me convert karna
    const itemName = JSON.parse(decodeURIComponent(productData));
    // const productid = itemName.productid
    cart.push(itemName);
    localStorage.setItem("cart",JSON.stringify(cart))
    window.location.reload()
    // localStorage.setItem("Cart",JSON.stringify([itemName]))
       console.log("carrrrrrrrrrrrrrrrrrrrrrrrrt:",cart)
     

    }  

    function plus()
    {
        // alert("yes")
        let predata = JSON.parse(localStorage.getItem('cart'))
        // console.log("predata:",predata.length)
        var cart = [];
        if(predata?.length>0)
        {
            cart.push(...predata)
        }
        const urlParams = new URLSearchParams(window.location.search);
    const productData = urlParams.get('productData');

    
    // JSON string ko object me convert karna
    const itemName = JSON.parse(decodeURIComponent(productData));
    // const productid = itemName.productid
    cart.push(itemName);
    localStorage.setItem("cart",JSON.stringify(cart))
    window.location.reload()
    }

    function minus()
    {
       //alert("hello")
       let predata = JSON.parse(localStorage.getItem('cart'))
        // console.log("predata:",predata.length)
        var cart = [];

        if(predata?.length>0)
            {
                cart.push(...predata)
            }

        const urlParams = new URLSearchParams(window.location.search);
        const productData = urlParams.get('productData');
        // JSON string ko object me convert karna
        const itemName = JSON.parse(decodeURIComponent(productData));
       let indexa =''
       cart.forEach((item,index)=>{
        if(itemName.productid==item.productid)
        {
            indexa=index;
            // alert(index)
        }
           
       })
       cart.splice(indexa,1)
       localStorage.setItem("cart",JSON.stringify(cart))

    //    alert(indexa)
    window.location.reload()
    }

    function cart()
    {
        window.location.href="file:///D:/ecommercepagetem/Pages/addtocart.html"
 
    }

    function login()
    {
        window.location.href="file:///D:/ecommercepagetem/Pages/loginpage.html"

    }
    function signup()
    {
        window.location.href="file:///D:/ecommercepagetem/Pages/signuppage.html"

    }

    function loginsubmit()
    {
        
        if(useremailidl.value.trim() && userpasswordl.value.trim())
            {
                fetch('http://localhost:3000/user/check_user_login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({emaildid:useremailidl.value,password:userpasswordl.value}),
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
                        alert("Login Successfully")
                        localStorage.setItem("user",JSON.stringify(data.data))
                        window.location.href="file:///D:/ecommercepagetem/Pages/addtocart.html"
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
            else{
                alert("Please Fill All Field.")
            } 
    }


    function re()
{
    var user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):-1
    if(user.length>=0)
    {
        loginandsignup.innerHTML = `<span style="margin-right:60px;display: flex;justify-content: center;flex-direction: column;cursor:pointer;"><i class="fa-solid fa-user" ></i><div style="display: flex;justify-content: center;margin-left:-10px;font-size:10px;">${user[0].username}</div></span><span style="margin-right:50px;cursor:pointer;" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i><div style="display: flex;justify-content: center;margin-left:-10px;font-size:10px;">Logout</div></span>`
    }
}

function logout()
{
    var confirmation = confirm("Do You want to Logout?")
    if(confirmation)
    {
        localStorage.removeItem("user")
        location.reload()
    }
}
    
    


/*// Cart ka initial data
let cart = [];

// Item add karne ka function
function addItem(item) {
    cart.push(item);
    console.log(`${item.name} added to cart.`);
}

// Item delete karne ka function
function deleteItem(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    console.log(`${itemName} removed from cart.`);
}

// Item modify karne ka function
function modifyItem(itemName, newItem) {
    const index = cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
        cart[index] = newItem;
        console.log(`${itemName} modified.`);
    } else {
        console.log(`${itemName} not found in cart.`);
    }
}

// Cart mein items dekhne ka function
function viewCart() {
    console.log("Items in cart:");
    cart.forEach(item => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}

// Example usage
addItem({ name: 'Shirt', price: 20 });
addItem({ name: 'Pants', price: 30 });
viewCart(); // Items dekhne ke liye

modifyItem('Shirt', { name: 'Shirt', price: 25 }); // Modify item
deleteItem('Pants'); // Delete item
viewCart(); // Final cart dekhne ke liye
 */
