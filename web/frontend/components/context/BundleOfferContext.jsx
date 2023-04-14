import { React, createContext,useState } from "react";
export const BundleOfferStates = createContext();
export const BundleOfferContext = (props) => {
const [selectedProduct, setSelectedProducts] = useState([]);
const [discountValue, setDiscountValue] = useState(10);
const [discountType, setDiscountType] = useState('percent');
const roundDiscount = [
  {value:".00",label:".00"},
  {value:".49",label:".49"},
  {value:".50",label:".50"},
  {value:".95",label:".95"},
  {value:".99",label:".99"},
]
const discountParam = [
  {value:"percent",label:"% Off"},
  {value:"fixed",label:"Rs. Off"},
]

  return (
    <>
      <BundleOfferStates.Provider
        value={{
          selectedProduct,
          setSelectedProducts,
          roundDiscount,discountParam,
          discountValue, setDiscountValue,
          discountType, setDiscountType
        }}
      >
        {props.children}
      </BundleOfferStates.Provider>
    </>
  );
};
