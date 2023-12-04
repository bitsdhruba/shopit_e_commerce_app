import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";


function Navbar() {
    return (
      <div className="bg-black text-white">
        <nav className="w-3/5 m-auto">
          <ul className="flex justify-between items-center h-20">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/cart">
              <li>
                Cart <BsCart4 />
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;