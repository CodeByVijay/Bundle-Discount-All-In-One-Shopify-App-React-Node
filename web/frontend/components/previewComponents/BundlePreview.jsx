import { React, useState, useContext, useEffect } from "react";
import { BundleOfferStates } from "../context/BundleOfferContext";

const BundlePreview = (props) => {
  const {
    selectedProduct,
    setSelectedProducts,
    discountValue,
    discountType,
  } = useContext(BundleOfferStates);

  const handleVariant = (productId, e) => {
    const variantIndex = e.target.value;
    const index = selectedProduct.findIndex(
      (x) => x.selectedProduct.id == productId
    );
    selectedProduct[index].selectedVariant =
      selectedProduct[index].selectedProduct.variants[variantIndex];
    setSelectedProducts([...selectedProduct]);
  };
  // const totalPrice = selectedProduct.reduce((acc, cur) => {
  //   console.log(cur.selectedVariant.price,"acc,cur")
  //   return Number(acc.selectedVariant.price).toFixed(2) + cur.selectedVariant && Number(cur.selectedVariant.price).toFixed(2), 0
  // });
  // console.log(totalPrice,"total Price")
  return (
    <>
      <h1>{props.data}</h1>
      <div className="itemBox">
        {selectedProduct.map((val, index) => {
          // console.log(val, "val");
          return (
            <>
              {val.selectedProduct && (
                <>
                  <div key={index} className="productBox">
                    <div className="grid grid-cols-3 gap-3 p-3">
                      <div className="pimage">
                        <img
                          src={
                            val.selectedProduct.image &&
                            val.selectedProduct.image.src
                              ? val.selectedProduct.image.src
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                          }
                          alt=""
                          width="60"
                          height="60"
                        />
                      </div>
                      <div className="pname">{val.selectedProduct.title}</div>
                      <div className="priceTotal text-right">
                        {discountType === 'percent' && (
                          <strike>
                          <span>
                            Rs.{" "}
                            {val.selectedVariant && Number(val.selectedVariant.price).toFixed(2)}
                          </span>
                        </strike>
                        )}
                        &nbsp;&nbsp;
                        <span>Rs. {discountType === 'percent'?Number(val.selectedVariant.price-(val.selectedVariant.price*discountValue/100)).toFixed(2):Number(val.selectedVariant.price).toFixed(2)}</span>
                      </div>
                    </div>

                    {val.selectedVariant &&
                      val.selectedVariant.title !== "Default Title" && (
                        <>
                          <div className="variantBox m-3">
                            <select
                              name=""
                              id={`variant-select${val.selectedVariant.id}`}
                              className="focus:border-none rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-1/3 block pl-2 p-2.5"
                              style={{ width: "100%" }}
                              onChange={(e) =>
                                handleVariant(val.selectedProduct.id, e)
                              }
                            >
                              {val.selectedProduct.variants.map(
                                (variant, vindex) => (
                                  <option key={vindex} value={vindex}>
                                    {variant.title} - Rs. {variant.price}
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
