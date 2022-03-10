var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        link: 'https://www.amazon.com/s?k=socks&ref=nb_sb_noss',
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [{
                variantTd: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpeg",
                variantQuantity: 0
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },

        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + '' + this.product + 'are on sale!'
            }
            return this.brand + '' + this.product + 'are not on sale!'
        }
    },
})
