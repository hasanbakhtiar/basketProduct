let carts = document.querySelectorAll('.add-cart');

let products = new Array(
    {
        name: 'Product1',
        tag: 'tag1',
        price: 15,
        inCart:0
    },
    {
        name: 'Product2',
        tag: 'tag2',
        price: 15,
        inCart:0
    },
    {
        name: 'Product3',
        tag: 'tag3',
        price: 15,
        inCart:0
    },
    {
        name: 'Product4',
        tag: 'tag4',
        price: 15,
        inCart:0
    }
);

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
        
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
        
    }else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;

    }
}
onLoadCartNumbers();