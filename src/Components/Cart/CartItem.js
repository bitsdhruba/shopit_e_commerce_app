
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/Slices/CartSlice";
import toast from "react-hot-toast";

function CartItem({cartItem}) {

	const dispatch = useDispatch();
    
	function removeItem(){
		dispatch( removeFromCart(cartItem.id) );
		toast.success("Item Removed");
	}
	
	return (
    <div className=" flex justify-center m-10 shadow-md">
      <div className=" aspect-auto objuct-cover w-[30%] my-5">
        <img src={cartItem.image} alt="" className="object-cover "></img>
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
        <h1 className="text-xl text-slate-700 font-semibold">
          {cartItem.title}
        </h1>
        <h1 className="text-base text-slate-700 font-medium">
          {cartItem.description}
        </h1>

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg text-green-600">
            {" "}
            $ {cartItem.price}
          </h1>

          <div className="m-2">
            <button
              onClick={removeItem}
              className="flex mx-5 text-red-800 text-lg bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-lg p-3"
            >
              Remove Item <RiDeleteBin6Line className="text-2xl mx-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;