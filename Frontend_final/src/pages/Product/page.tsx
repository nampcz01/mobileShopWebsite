/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect,useState } from "react";
import { getAllProducts, searchProductByName } from "../../service/product.service";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

const Product = () => {
  const [products, setProducts] = useState<any>([])
  // const abortController = useRef<any>(null);
  useEffect(()=>{
    fetchData()
  },[]) 
  const fetchData = async()=>{
      try {
        const res = await getAllProducts()
        setProducts(res.data)
      } catch (e) {
        console.log(e)
      }
      console.log(products)
  }
  const fetchDataForSearching = async (info:any) => {
    try {
      const res = await searchProductByName({...info});
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <section className="flex flex-col items-center justify-center mb-22">
      <div className="flex flex-col items-center justify-center mb-22">
        <SearchBar fetchDataForSearching={fetchDataForSearching} />
        <List products={products}/>
      <div/>
        
      </div>
    </section>

  );
};

export default Product;
