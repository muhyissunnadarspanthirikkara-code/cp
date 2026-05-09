const watches = [
    { name: "Casio G-Shock", price: "₹2,999", brand: "Casio", image: "https://via.placeholder.com/200x200?text=Casio+Watch" },
    { name: "Titan Neo", price: "₹1,499", brand: "Titan", image: "https://via.placeholder.com/200x200?text=Titan+Watch" },
    { name: "Fastrack Casual", price: "₹999", brand: "Fastrack", image: "https://via.placeholder.com/200x200?text=Fastrack+Watch" },
    { name: "Fossil Gen 6", price: "₹4,500", brand: "Fossil", image: "https://via.placeholder.com/200x200?text=Fossil+Watch" },
    { name: "Rolex Oyster", price: "₹9,999", brand: "Rolex", image: "https://via.placeholder.com/200x200?text=Rolex+Watch" },
    { name: "Sonata Gold", price: "₹799", brand: "Sonata", image: "https://via.placeholder.com/200x200?text=Sonata+Watch" }
];

const productList = document.getElementById('product-list');

watches.forEach(watch => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${watch.image}" alt="${watch.name}">
        <h3>${watch.name}</h3>
        <p class="price">${watch.price}</p>
        <p style="color: gray; font-size: 12px;">Free Delivery</p>
    `;
    productList.appendChild(card);
});
