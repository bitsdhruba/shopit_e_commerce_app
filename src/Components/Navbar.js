import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";


function Navbar() {
  
  const {cart} = useSelector((state) => state);
  
  return (
      <div className="bg-black text-white h-20 fixed w-full">
        <nav className="flex items-center w-3/5 h-20 m-auto ">
          <div className="flex justify-between items-center w-full h-full">
            <ul className="flex justify-between items-center w-full h-full">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/cart">
                <div className="relative">
                  <li className="flex">
                    <span className="mx-6">Cart</span>
                    <BsCart4 className="text-2xl" />
                    {
                    cart.length > 0 && (
                      <span
                        className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                      >
                        {cart.length}
                      </span>
                    )}
                  </li>
                </div>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;