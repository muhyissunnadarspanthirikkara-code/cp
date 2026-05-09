document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
        button.innerHTML = "<span>Added!</span>";
        button.style.backgroundColor = "#25d366";
        
        setTimeout(() => {
            button.innerHTML = "<span>Add to cart</span>";
            button.style.backgroundColor = "#161616";
        }, 2000);
    });
});
