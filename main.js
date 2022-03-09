var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        link: 'https://www.amazon.com/s?k=socks&ref=nb_sb_noss',
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [{
                variantTd: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ["S", "M", "L", "XL"]
    }
})
