document.addEventListener('DOMContentLoaded', () => { 
    var user = JSON.parse(localStorage.getItem('user'));
    var cart = JSON.parse(localStorage.getItem('cart'))
    if(!cart?.length>0)
    {
      document.getElementById("container2").innerHTML=`<img src="https://png.pngtree.com/png-vector/20230827/ourmid/pngtree-empty-cart-vector-png-image_9229937.png"/><div style="display:flex;justify-content:center;"><div style="font-size:25px;">Add Item Into Cart</div></div>`
      document.getElementById("btnn").innerHTML=""
    }
 showcart(cart);
    // console.log("yes yes:",cart)
    showdata(user)

})  



    function showdata(user)
    {
            // alert(user.username)
            if(!user[0]?.length>0)
            {
                document.getElementById("addressshow").innerHTML=`<div>Please Login First</div>`


            }
            document.getElementById("addressshow").innerHTML=`<div>${user[0]?.address}</div>`
    }

    function showcart(cart)
    {
        // var items=''
        var result=""
        var total='0'
      cart?.forEach(item => {
       total=parseInt(total)+parseInt(item.offerprice)
        result+=`<div class="containerA2" >
                    <div>
                        <h4>${item.productname}</h4><br><h5>${item.color}/${item.modelno}</h5>
                    </div>
                    
                  
                    <div>
                        <h5 class="off">${item.price}</h5><br><h4>${item.offerprice}</h4>
                    </div>
                    
                    </div>`
      });
      document.getElementById("totalbillaa").innerHTML=total
      document.getElementById("items").innerHTML=result
    }


    function placedorder()
    {
        var user = JSON.parse(localStorage.getItem('user'));
        var cart = JSON.parse(localStorage.getItem('cart'))
        var username = user[0].username;
        var arr =[]
        var userdetails = cart
        arr.push(...cart)
        console.log("arr:",arr)
        var str = ""
        arr.forEach((item)=>{
        str +=`${item.categoryname}/${item.productname}/${item.price}/${item.offerprice}/${item.modelno}  `
        })

        console.log("str:",str)
        fetch('http://localhost:3000/user/order_submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username:username,orderdetails:str}),
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
                alert("Ordered Successfully")
                localStorage.removeItem('cart')
                // localStorage.setItem("user",JSON.stringify(data.data))
                window.location.href="file:///D:/ecommercepagetem/Pages/homepage.html"
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