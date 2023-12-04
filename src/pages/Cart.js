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
      <div className="w-1/2 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
        {cart.length > 0 ? (
					<div>	
						<div className="w-[100%] md:w-[60%] flex flex-col p-2">
							{cart.map((cartItem) => (
								<CartItem cartItem={cartItem} key={cartItem.id} />
							))}
						</div>
						
						<div className="w-1/2 w-[100%] md:w-[40%] mt-5  flex flex-col">
							<h1 className="font-semibold text-xl text-green-800 ">YOUR CART</h1>
							<h1 className="font-semibold text-5xl text-green-700  -mt-5">
								SUMMARY
							</h1>
							<h1 className="text-gray-700 font-semibold text-xl">
								Total Items : {cart.length}
							</h1>
							<h1 className="text-gray-700 font-semibold text-xl font-bold">
								Total Amount : {totalAmount}
							</h1>
							<div>
								<button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
									Checkout Now
								</button>
							</div>
						</div>
					</div>

        	) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your Cart is Empty
            </h1>
            <Link to="/">
              <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                SHOP NOW
              </button>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}

export default Cart;