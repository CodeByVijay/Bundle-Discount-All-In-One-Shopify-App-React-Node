import { React, useState, useContext, useEffect } from "react";
import { BundleOfferStates } from "../context/BundleOfferContext";

const BundlePreview = (props) => {
  const {
    selectedProduct,
    setSelectedProducts,
    discountValue,
    discountType,
    discountStatus,
    customerChecked,
    customerOptionCheckbox,
    customerOptionSelected,
    setCustomerOptionSelected,
    checkedFreeProduct,
    setCheckedFreeProduct,
  } = useContext(BundleOfferStates);

  const handleVariant = (productId, e) => {
    const variantIndex = e.target.value;
    const index = selectedProduct.findIndex(
      (x) => x.selectedProduct.id == productId
    );
    selectedProduct[index].selectedVariant =
      selectedProduct[index].selectedProduct.variants[variantIndex];
    setSelectedProducts([...selectedProduct]);
    setCustomerOptionSelected("");
  };
  const totalPrice = selectedProduct.reduce((acc, cur) => {
    const price = cur.freeProduct!==true?cur.selectedVariant && Number(cur.selectedVariant.price):null;
    const productTotal = price && price !== null ? price : 0.0;
    cur.productTotal = Number(productTotal.toFixed(2));
    return acc + productTotal;
  }, 0).toFixed(2);

  const totalPriceCross = selectedProduct.reduce((acc, cur) => {
    const price = cur.selectedVariant && Number(cur.selectedVariant.price);
    const productTotal = price && price !== null ? price : 0.0;
    cur.productTotal = Number(productTotal.toFixed(2));
    return acc + productTotal;
  }, 0).toFixed(2);
  
  console.log(selectedProduct,"selected")
  console.log(checkedFreeProduct,"checkedFreeProduct")
  return (
    <>
      <h1>{props.data}</h1>
      <div className="itemBox">
        {selectedProduct.map((val, index) => {
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
                        {val.selectedVariant && (
                          <strike>
                            <span>
                              Rs.{" "}
                              {discountStatus === "add_discount" &&
                              discountType === "percent"
                                ? Number(val.selectedVariant.price).toFixed(2)
                                : discountStatus === "add_discount" &&
                                  discountType === "fixed"
                                ? Number(val.selectedVariant.price).toFixed(2)
                                : Number(
                                    Number(val.selectedVariant.price) +
                                      (Number(val.selectedVariant.price) * 10) /
                                        100
                                  ).toFixed(2)}
                            </span>
                          </strike>
                        )}
                        &nbsp;&nbsp;
                        <span>
                          Rs.{" "}
                          { val.freeProduct && val.freeProductId=== val.selectedProduct.id ?'FREE':`${discountStatus === "add_discount" &&
                          discountType === "percent"
                            ? Number(
                                val.selectedVariant.price -
                                  (val.selectedVariant.price * discountValue) /
                                    100
                              ).toFixed(2)
                            : discountStatus === "add_discount" &&
                              discountType === "percent"
                            ? Number(val.selectedVariant.price).toFixed(2)
                            : Number(val.selectedVariant.price).toFixed(2)}`}
                        </span>
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
                              {customerChecked && (
                                <option key={`choose`} value="" selected>
                                  Choose variant
                                </option>
                              )}
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
          <div className="text-right">
            <span>
              <span className="color-[#10b981]">
                {discountStatus === "add_discount" && discountType === "percent"
                  ? `Save ${discountValue}%`
                  : discountStatus === "add_discount" &&
                    discountType === "fixed"
                  ? `Save Rs.  ${discountValue}`
                  : discountStatus === "free_gift"
                  ? `FREE GIFT INCLUDED`
                  : discountStatus === "no_discount"
                  ? ""
                  : ""}
              </span>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="textTotal">
              <p>Total : </p>
            </div>
            <div className="priceTotal text-right">
              <strike>
                <span>Rs. {discountStatus === "add_discount" &&
                              discountType === "percent"
                                ? Number(totalPriceCross).toFixed(2)
                                : discountStatus === "add_discount" &&
                                  discountType === "fixed"
                                ? Number(totalPriceCross).toFixed(2)
                                : Number(
                                    Number(totalPriceCross) +
                                      (Number(totalPriceCross) * 10) /
                                        100
                                  ).toFixed(2)}
                </span>
              </strike>
              &nbsp;&nbsp;
              <span>
                Rs.{" "}
                {discountStatus === "add_discount" && discountType === "percent"
                  ? Number(
                      totalPrice - (totalPrice * discountValue) / 100
                    ).toFixed(2)
                  : discountStatus === "add_discount" &&
                    discountType === "fixed"
                  ? Number(
                      Number(totalPrice).toFixed(2) -
                        Number(discountValue).toFixed(2)
                    ).toFixed(2)
                  : Number(totalPrice).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BundlePreview;
