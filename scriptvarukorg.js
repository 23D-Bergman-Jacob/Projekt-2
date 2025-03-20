window.onload = function() {
    const cartItems = JSON.parse(localStorage.getItem('varukorg_items')) || [];
    const cartList = document.getElementById('cart-list');

        for (let i = 0; i < cartItems.length; i++)
        {
        const li = document.createElement('li');
        li.textContent = (cartItems[i]);
        cartList.appendChild(li);
    }
};
