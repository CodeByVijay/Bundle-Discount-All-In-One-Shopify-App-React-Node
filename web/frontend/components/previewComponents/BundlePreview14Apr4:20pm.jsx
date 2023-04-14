import { React, useState, useContext,useEffect } from "react";
import { ProductContext } from "../context/ProductsApiContext";
import { BundleOfferStates } from "../context/BundleOfferContext";

const BundlePreview = (props) => {
  const { products } = useContext(ProductContext);
  const { selectedProduct } = useContext(BundleOfferStates);
  const [allProductsList, setAllProductsList] = useState(products);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    setVariantIndex(0);
  }, []);

  const handleVariant = (id, e) => {
    console.log(id, e.target.value, "Product Id, Selected Value");
    setVariantIndex(e.target.value);
  };

  return (
    <>
      <h1>{props.data}</h1>
      <div className="itemBox">
        {selectedProduct.map(
          (val, index) =>
            val.selectedOption && (
              <>
                {allProductsList.map((product, pIndex) => {
                  return (
                    <>
                      {product.id === val.selectedOption && (
                        <>
                          {product.variants.map((variantData, variantI) => {
                            console.log(variantIndex===variantI);
                            return (
                              <>
                                {variantI === 0 && (
                                  <>
                                    <div key={variantI} className="productBox">
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
                                        <div className="pname">
                                          {product.title}
                                        </div>
                                        <div className="priceTotal text-right">
                                          <strike>
                                            <span>
                                              Rs.{" "}
                                              {product.variants &&
                                                product.variants[0].price}
                                                  {/* product.variants.length > 1
                                                    ? variantIndex
                                                    : 0 */}
                                            </span>
                                          </strike>
                                          &nbsp;&nbsp;
                                          <span>Rs. 100.00</span>
                                        </div>
                                      </div>

                                      {product.variants &&
                                        product.variants[0].title !==
                                          "Default Title" && (
                                          <>
                                            <div className="variantBox m-3">
                                              <select
                                                name=""
                                                id={`variant-select${variantI}`}
                                                className="focus:border-none rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-1/3 block pl-2 p-2.5"
                                                style={{ width: "100%" }}
                                                onChange={(e) =>
                                                  handleVariant(product.id, e)
                                                }
                                              >
                                                {product.variants.map(
                                                  (variant, vindex) => (
                                                    <option
                                                      key={vindex}
                                                      value={vindex}
                                                    >
                                                      {variant.title} - Rs.{" "}
                                                      {variant.price}
                                                    </option>
                                                  )
                                                )}
                                              </select>
                                            </div>
                                          </>
                                        )}
                                    </div>
                                    <hr />
                                  </>
                                )}
                              </>
                            );
                          })}
                        </>
                      )}
                    </>
                  );
                })}
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
