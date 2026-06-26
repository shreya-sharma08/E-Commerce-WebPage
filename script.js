const products = [

{
name:"Men T-Shirt",
category:"Men",
price:"₹599",
image:"https://picsum.photos/300?random=1"
},

{
name:"Women Dress",
category:"Women",
price:"₹999",
image:"https://picsum.photos/300?random=2"
},

{
name:"Watch",
category:"Accessories",
price:"₹1499",
image:"https://picsum.photos/300?random=3"
},

{
name:"Men Jacket",
category:"Men",
price:"₹1999",
image:"https://picsum.photos/300?random=4"
},

{
name:"Handbag",
category:"Accessories",
price:"₹899",
image:"https://picsum.photos/300?random=5"
},

{
name:"Women Top",
category:"Women",
price:"₹699",
image:"https://picsum.photos/300?random=6"
}

];

function displayProducts(data){

const container =
document.getElementById("productContainer");

container.innerHTML="";

data.forEach(product=>{

container.innerHTML += `
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.category}</p>
<p>${product.price}</p>
<button>Add to Cart</button>
</div>
`;

});
}

function searchProducts(){

let search =
document.getElementById("search")
.value.toLowerCase();

let filtered =
products.filter(product =>
product.name.toLowerCase().includes(search)
);

displayProducts(filtered);
}

function filterCategory(){

let category =
document.getElementById("categoryFilter").value;

if(category==="all"){
displayProducts(products);
return;
}

let filtered =
products.filter(product =>
product.category===category
);

displayProducts(filtered);
}

displayProducts(products);