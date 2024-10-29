import CartItem from "../components/CartItem"
import cart from "../data/cart";
function Cart  () {


    return (
        <>
        <CartItem cart= {cart}></CartItem>
        </>
    )
}
export default Cart;