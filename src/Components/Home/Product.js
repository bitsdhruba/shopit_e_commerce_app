
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
      <div>
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div>
          <img src={product.image} alt=""></img>
        </div>
        <div>
          <h2> ${product.price}</h2>
          <div>
            {
            cart.some((item)=>item.id === product.id) ? (
              <button onClick={ removeHandler }>Remove from Cart</button>
            ) : (
              <button onClick={ addHandler }>Add to Cart</button>
            )
            }
          </div>
        </div>
      </div>
    );
}

export default Product;
