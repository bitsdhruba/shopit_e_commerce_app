
import { useEffect,useState } from 'react';
import Product from '../Components/Home/Product';
import Spinner from '../Components/Home/Spinner';

function Home() {

    const [load , setLoad] = useState(false);
    const [products , setProducts] = useState([]);
    
    async function fetchProducts (){

      const url = "https://fakestoreapi.com/products";
      setLoad(true);
      try {
          
        const response = await fetch(url);
        const productsData = await response.json();
        setProducts(productsData);
          
      } catch (error) {
        setProducts([]);
        console.log("Something went wrong. Sorry we will fix this soon.")
      }
      setLoad(false);
        
    }

    useEffect( () => {
      fetchProducts();
    }, [] )
    
    return (
      <div>
        Welcome to my home page motherfuckers.
        {load ? (
          <Spinner />
        ) : (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;