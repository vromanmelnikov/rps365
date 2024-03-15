class CartService {

    increaseCount() {
        const count = document.getElementById('cart_item_count')
        let countValue = parseInt(count.innerHTML) + 1

        count.innerHTML = countValue
    }

    getCartCount() {
        let cart = JSON.parse(window.localStorage.getItem('cart'))
        let count = 0
        if (cart) {
            count = cart.length
        }
        return count
    }

    addProductToCart(product, typeCost) {

        let cart = JSON.parse(window.localStorage.getItem('cart'))
        let cost = parseInt(window.localStorage.getItem('cost'))

        if (!cart) {
            cart = []
        }
        if (!cost) {
            cost = 0
        }

        cart.push(product)
        cost += parseInt(typeCost)

        console.log(cost)

        window.localStorage.setItem('cart', JSON.stringify(cart))
        window.localStorage.setItem('cost', cost)

        this.increaseCount()

    }

}

export default CartService = new CartService()