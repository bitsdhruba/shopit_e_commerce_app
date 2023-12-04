import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/Cart/CartItem";
import { useEffect, useState } from "react";


function Cart() {
  
	const {cart} = useSelector((state)=> state); // taking out the data from the cart 

	console.log(cart);

	const [totalAmount, setTotalAmount] = useState(0);

	useEffect( () => {
		setTotalAmount(cart.reduce( (acc , curr)=> acc + curr.price , 0 ) )
	}, [cart])
    
  return (
    <div className="flex w-3/5 m-auto">
      <div className="w-1/2 ">
				{
					cart.length > 0 ? 
					(
						cart.map( (cartItem) => ( <CartItem cartItem = {cartItem} key={cartItem.id} /> ) )
					) :
					(
						<div>
							<h1>Your Cart is Empty</h1>
							<Link to = "/">
								<button>SHOP NOW</button>
							</Link>
						</div>
					)
				}
			</div>
      <div className="w-1/2 ">
        <h1>YOUR CART</h1>
        <h1>SUMMARY</h1>
        <h1>Total Items : {cart.length}</h1>
        <h1>Total Amount : {totalAmount}</h1>
        <div>
          <button>Checkout Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;