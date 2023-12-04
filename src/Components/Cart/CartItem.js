
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
    <div >
      <div >
        <img src={cartItem.image} alt="" className="object-cover "></img>
      </div>
      <div >
        <h1 >
          {cartItem.title}
        </h1>
        <h1 >
          {cartItem.description}
        </h1>
      </div>
      <div >
        <h1 >{cartItem.price}</h1>

        <div >
          <button onClick={removeItem}>
            Remove Item <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;