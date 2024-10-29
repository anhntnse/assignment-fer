import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
function CardItem({cart}){
    return(
        <>
         <div className="container mt-5">
            <div className="text-start">Home/Cart</div>
            <table className="table  mt-4 ">
                <thead>
                    <tr>
                        <th className="text-start">Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td className="d-flex align-items-center p-1">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        style={{ width: '50px', height: '50px', marginRight: '10px',   }} // Adjust size and margin
                                    />
                                    {item.name}
                                </td>
                            <td>${item.price}</td>
                            <td><input type="number" min="1" style={{ width: '40px', padding: '2px', textAlign: "center" }}></input></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center mt-3">
                    <button type="button" className="btn btn-outline-secondary rounded px-4 py-2 bg-black">
                        Return To Shop
                    </button>
                    <button type="button" className="btn btn-outline-secondary rounded px-4 py-2 bg-black">
                        Update Cart
                    </button>


                </div >  
                <div className="d-flex justify-content-between" style={{marginTop: "20px"}}>
                <div className="text-start" >
                    <input type="text" placeholder="Coupon Code"  className="border-0 me-2 "   style={{ flex: '1',width: '200px', height: '50px', fontSize: '16px' }}></input>
                    <button type="button" class="btn btn-danger">Danger</button>
                </div>
                
                <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title text-start">Cart Total</h5>
    <br></br>
    <h6 class="card-subtitle mb-2 text-body-secondary text-start">Subtotal:</h6>
    <br></br>
    <h6 class="card-subtitle mb-2 text-body-secondary text-start">Shipping:</h6>
    <br></br>
    <h6 class="card-subtitle mb-2 text-body-secondary text-start">Total:</h6>
    <br></br>
    <Link to="/checkout"> <Button variant="danger" block>Proceed to Checkout</Button> </Link>  </div>
</div>
</div>

                
        </div>
        </>
    )
}
export default CardItem