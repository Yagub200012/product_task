document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');


    function fetchProducts() {
        fetch('/api/products/')
            .then(response => response.json())
            .then(data => {
                productList.innerHTML = '';
                data.forEach(product => {
                    const row = `<tr>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>${product.price}</td>
                    </tr>`;
                    productList.insertAdjacentHTML('beforeend', row);
                });
            });
    }

    fetchProducts();


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;

        const productData = {
            name: name,
            description: description,
            price: price
        };

        fetch('/api/product_create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    fetchProducts();
                } else {
                    return response.json().then(errorData => {
                        errorMessage.textContent = errorData.price || 'Ошибка при создании продукта.';
                        errorMessage.style.display = 'block';
                    });
                }
            });
    });
});
