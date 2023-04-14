import { React, useState, useContext } from "react";
import { ProductContext } from "../context/ProductsApiContext";
import { BundleOfferStates } from "../context/BundleOfferContext";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

const BundlePreview = (props) => {
  const { products } = useContext(ProductContext);
  const { selectedProduct } = useContext(BundleOfferStates);
  const [allProductsList, setAllProductsList] = useState(products);
  const [variant, setVeriant] = useState();

  const handleVariant = (id,e) => {
    console.log(e.target.value, "sdf");
    setVeriant(e.target.value)
  };
  console.log(variant, "variant");
  return (
    <>
      <h1>{props.data}</h1>
      <div className="itemBox">
        {selectedProduct.map(
          (val, index) =>
            val.selectedOption && (
              <>
                {allProductsList.map(
                  (product, pIndex) =>
                    product.id === val.selectedOption && (
                      
                      <>
                        <div key={pIndex} className="productBox">
                          
                          <div className="grid grid-cols-3 gap-3 p-3">
                            <div className="pimage">
                              <img
                                src={
                                  product.image && product.image.src
                                    ? product.image.src
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                                }
                                alt=""
                                width="60"
                                height="60"
                              />
                            </div>
                            <div className="pname">{product.title}</div>
                            <div className="pprice text-right">
                              <strike>
                                <p className="mainPrice">Rs. 100.00</p>
                              </strike>
                              <p className="discPrice">Rs. 90.00</p>
                            </div>
                          </div>

                          {product.variants &&
                            product.variants[0].title !== "Default Title" && (
                              <>
                                <div className="variantBox m-3">
                                  <select
                                    name=""
                                    id={`variant-select${pIndex}`}
                                    className="w-90"
                                    onChange={(e) =>
                                     handleVariant(product.variants[0].id,e)
                                    }
                                  >
                                    {product.variants.map((variant, vindex) => (
                                      <option key={vindex} value={variant.id}>
                                        {variant.title}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </>
                            )}
                        </div>
                        <hr />
                      </>
                    )
                )}
              </>
            )
        )}

        <div className="totalBox px-5 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="textTotal">
              <p>Total : </p>
            </div>
            <div className="priceTotal text-right">
              <strike>
                <span>Rs. 100.00</span>
              </strike>
              &nbsp;&nbsp;
              <span>Rs. 90.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BundlePreview;
