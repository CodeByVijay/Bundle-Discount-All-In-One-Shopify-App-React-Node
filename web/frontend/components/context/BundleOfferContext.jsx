import { React, createContext,useState } from "react";
export const BundleOfferStates = createContext();
export const BundleOfferContext = (props) => {
    const [selectedProduct, setSelectedProducts] = useState([]);
  return (
    <>
      <BundleOfferStates.Provider
        value={{
          selectedProduct,
          setSelectedProducts,
        }}
      >
        {props.children}
      </BundleOfferStates.Provider>
    </>
  );
};
