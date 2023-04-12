import { React, createContext,useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../../hooks";
export const ProductContext = createContext();

export const ProductsApiContext = (props) => {
  const fetch = useAuthenticatedFetch();
  const [products, productsState] = useState([]);
  const [lastId, lastIdState] = useState(0);
  const [selectedProduct, setSelectedProducts] = useState([]);

  useEffect(()=>{
    fetch(`/api/products?id=${lastId}`)
    .then(res=>res.json())
    .then(x=>{
      // console.log(x,"context")
        const len = x.length-1
        const id = x[len].id
        const pro = products.concat(x.reverse())
        productsState(pro)
        lastIdState(id)
    }).catch(err=>{})
},[lastId])

  return (
  <>
  <ProductContext.Provider 
    value={{products, productsState,selectedProduct, setSelectedProducts}}
  >
    {props.children}
  </ProductContext.Provider>
  </>
  );
};


