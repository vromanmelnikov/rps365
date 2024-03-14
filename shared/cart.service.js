class CartService {

    increaseCount() {
        const count = document.getElementById('cart_item_count')
        let countValue = parseInt(count.innerHTML) + 1

        count.innerHTML = countValue
    }

}

export default CartService = new CartService()