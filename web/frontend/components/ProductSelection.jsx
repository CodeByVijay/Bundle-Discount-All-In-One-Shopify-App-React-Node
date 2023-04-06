// import { Provider } from '@shopify/app-bridge-react';
import { React, useEffect, useState } from "react";


const ProductSelection = (props) => {
  
  const [count, setCount] = useState(1);
  const handleAddNew = () => {
    // console.log(props.title)
    setCount(count + 1);
  };

  const handleDivRemove = (e) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function Product(data) {
  

    
    // const callProducts = async () => {
    //     fetch(`/api/products?id=${lastId}`)
    //     .then(res=>res.json())
    //     .then(x=>{
    //         console.log(x,"products ids")
    //         const len = x.length-1
    //         const id = x[len].id
    //         const pro = products.concat(x.reverse())
    //         productsState(pro)
    //         lastIdState(id)
    //     }).catch(err=>{})
    // };

    return (
      <>
      {/* <button type="button" onClick={callProducts}>Test</button> */}
        <div className="product">
          {data.count > 2 && (
            <div class="productDivBtn">
              <button
                className="deleteButton text-gray-500"
                onClick={(e) => handleDivRemove()}
              >
                <i class="fa fa-trash"></i>
              </button>
            </div>
          )}
          <label>Product {data.count}</label>
          <div className="relative w-full my-4">
            <div className="absolute inset-y-0 left-3 flex items-center pl-1 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>

            <input
              type="text"
              name=""
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
              placeholder="Choose Product"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="products p-3 border-solid w-2/3 border-2 mt-2"
        id="products"
      >
        <div className="productContainer" id="productContainer">
          {[...Array(count)].map((_, index) => (
            <>
              {index === 0 ? (
                <>
                  <Product count={index + 1} />
                  <Product count={index + 2} />
                </>
              ) : (
                <>
                  <Product count={2 + index} />
                </>
              )}
            </>
          ))}
        </div>

        <div className="btn">
          <button
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 mb-2"
            onClick={handleAddNew}
          >
            Add New
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductSelection;
