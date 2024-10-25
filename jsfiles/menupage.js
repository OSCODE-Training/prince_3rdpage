document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productData = urlParams.get('categoryid');
    alert(productData)
    
    fetch('http://localhost:3000/product/fetch_product_by_categoryid', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({categoryid:productData}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        // productdatabyid=data.data 
        alert("yessssss")
        console.log("menupage data from database :",data.data)
        if(data.data.length>0)
        {
            alert("yesa")
            var result=""
            data.data.map((item)=>{
               result+=`<div class="containerA1">
            <div class="logo1"></div>
            <div class="childcontainerA2">
            <div class="head1">NAME  <BR></BR>${item.productname}</div>
            <div class="rate1">Rate <BR></BR>${item.price}</div>
            <div class="btn">
                <button>ADD Cart</button>
            </div>
            </div>
        </div>`
            })
        container2.innerHTML=result    
        }
       

        // console.log('Success:', productdatabyid);
        
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });



})
