class CartService {

    increaseCount() {
        const count = document.getElementById('cart_item_count')
        let countValue = parseInt(count.innerHTML) + 1

        count.innerHTML = countValue
    }

    getCartCount() {
        let cart = JSON.parse(window.localStorage.getItem('cart'))
        return cart.length
    }

    addProductToCart(product, typeCost) {

        let cart = JSON.parse(window.localStorage.getItem('cart'))
        let cost = window.localStorage.getItem('cost')

        if (!cart) {
            cart = []
        }
        if (!cost) {
            cost = 0
        }

        cart.push(product)
        cost += typeCost

        window.localStorage.setItem('cart', JSON.stringify(cart))
        window.localStorage.setItem('cost', cost)

        this.increaseCount()

    }

}

export default CartService = new CartService()