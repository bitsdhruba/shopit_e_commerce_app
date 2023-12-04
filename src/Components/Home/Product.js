
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeFromCart } from "../../redux/Slices/CartSlice";
import toast from "react-hot-toast";


function Product({product}) {
    
    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    function removeHandler(){
      dispatch(removeFromCart(product.id));
      toast.success("Item Removed");
    }
    
    function addHandler(){
      dispatch(addtoCart(product));
      toast.success("Added Successfully.")
    }

    return (
      <div
        className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
      >
        <div>
          <h2 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {product.title}
          </h2>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
            `{product.description.substring(0, 50)}...`
          </p>
        </div>
        <div className="h-[180px]">
          <img src={product.image} alt="" className="h-full w-full "></img>
        </div>
        <div>
          <h2 className="text-green-600 font-semibold"> ${product.price}</h2>
          <div>
            {cart.some((item) => item.id === product.id) ? (
              <button onClick={removeHandler} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase">Remove from Cart</button>
            ) : (
              <button onClick={addHandler} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase">Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    );
}

export default Product;
