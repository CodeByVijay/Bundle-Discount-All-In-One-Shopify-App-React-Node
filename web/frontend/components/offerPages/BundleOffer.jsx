import { React, useState, useContext, useEffect } from "react";
import ProductSelection from "../ProductSelection";
import { useNavigate } from "react-router-dom";
import BundlePreview from "../previewComponents/BundlePreview";
import FooterInOfferPage from "./FooterInOfferPage";
import { ProductContext } from "../context/ProductsApiContext";
import { countryList } from "../country.js";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import { BundleOfferStates } from "../context/BundleOfferContext";
const animatedComponents = makeAnimated();

const BundleOffer = () => {
  let navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const {
    selectedProduct,
    roundDiscount,
    discountParam,
    discountValue,
    setDiscountValue,
    discountType,
    setDiscountType,
  } = useContext(BundleOfferStates);

  const [allProducts, setAllProducts] = useState(products);
  const [selectedDiscountType, setSelectedDiscountType] = useState(discountParam[0]);

  const [offername, setOfferName] = useState("");
  const [offerHeader, setOfferHeader] = useState("Buy 2 Get 1");
  const [offerHeaderlength, setOfferHeaderLength] = useState();
  const [discountStatus, setDiscountStatus] = useState("add_discount");

  const [customerChecked, setCustomerChecked] = useState(false);
  const [customerOptionCheckbox, setCustomerOptionCheckbox] = useState("");
  const [specificCountryChecked, setSpecificCountryChecked] = useState(false);
  const [specificCountryCheckbox, setSpecificCountryCheckbox] = useState("");
  const [hideStoreFrontChecked, setHideStoreFrontChecked] = useState(false);
  const [hideStoreFrontCheckbox, setHideStoreFrontCheckbox] = useState("");
  const [specificProductChecked, setSpecificProductChecked] = useState(false);
  const [specificProductCheckbox, setSpecificProductCheckbox] = useState("");

  const [startTimeChecked, setStartTimeChecked] = useState(false);
  const [startTimeCheckbox, setStartTimeCheckbox] = useState("");

  const [endTimeChecked, setEndTimeChecked] = useState(false);
  const [endTimeCheckbox, setEndTimeCheckbox] = useState("");

  const [roundDiscountChecked, setRoundDiscountChecked] = useState(false);
  const [roundDiscountCheckbox, setRoundDiscountCheckbox] = useState("");

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [roundDiscountVal, setRoundDiscountVal] = useState();

  const handleOfferName = (e) => {
    let offerName = e.target.value;
    setOfferName(offerName);
  };
  const handleOfferHeader = (e) => {
    let offerHeader = e.target.value;
    setOfferHeader(offerHeader);
    setOfferHeaderLength(e.target.value.length);
  };
  const handleDiscount = (status) => {
    setDiscountStatus(status);
  };
  const handleDiscountVal = (e) => {
    setDiscountValue(e.target.value);
  };
  const handleDiscountType = (selected)=>{
    setSelectedDiscountType(selected)
    setDiscountType(selected.value);
  }

  const handleCustomerOptionCheckbox = (status) => {
    setCustomerChecked(!customerChecked);
    setCustomerOptionCheckbox(status);
  };
  const handleSpecificCountryCheckbox = (status) => {
    setSpecificCountryChecked(!specificCountryChecked);
    setSpecificCountryCheckbox(status);
    setSelectedCountries([]);
  };
  const handleHideStoreFrontCheckbox = (status) => {
    setHideStoreFrontChecked(!hideStoreFrontChecked);
    setHideStoreFrontCheckbox(status);
  };
  const handleSpecificProductCheckbox = (status) => {
    setSpecificProductChecked(!specificProductChecked);
    setSpecificProductCheckbox(status);
  };
  const handleStartTimeCheckbox = (status) => {
    setStartTimeChecked(!startTimeChecked);
    setStartTimeCheckbox(status);
  };
  const handleEndTimeCheckbox = (status) => {
    setEndTimeChecked(!endTimeChecked);
    setEndTimeCheckbox(status);
  };
  const handleRoundDiscountCheckbox = (status) => {
    setRoundDiscountChecked(!roundDiscountChecked);
    setRoundDiscountCheckbox(status);
  };
  const countries = countryList.map((val, _) => {
    return {
      value: val.name,
      label: val.name,
    };
  });
  const handleCountry = (selected) => {
    setSelectedCountries(selected);
  };
  const handleRoundDiscount = (selected) => {
    setRoundDiscountVal(selected);
  };
  return (
    <>
      <div className="container">
        <div className="flex grid grid-cols-3 mt-5 gap-4 md:grid-cols-3">
          <div className="col-span-2 border-solid border-2 border-clay-500 ml-2 contentDiv mb-20">
            <div className="headSection flex w-full h-11 bg-[#f0ffff]">
              <button
                type="button"
                className="m-2"
                onClick={() => navigate(-1)}
              >
                <i className="fa fa-arrow-left"></i>
              </button>
              <h4 className="text-lg text-bold p-2">Bundle Discount</h4>
            </div>
            <div className="bodySection">
              <label
                htmlFor="offerTitle"
                className="block mb-2 text-xl text-bold font-medium text-gray-900 dark:text-white"
              >
                Offer Name
              </label>
              <input
                type="text"
                id="offerTitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={offername}
                onChange={(e) => handleOfferName(e)}
              />
              <hr className="my-3" />

              <label
                htmlFor="offerTitle"
                className="block mb-2 text-xl text-bold font-medium text-gray-900 dark:text-white"
              >
                Offer Header
              </label>
              <input
                type="text"
                id="offerTitle"
                onChange={handleOfferHeader}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={
                  offerHeaderlength !== 0 ? "" : "Please type offer header."
                }
                value={offerHeader}
              />
              <div className="productSelect mb-2">
                <ProductSelection productData={allProducts} />
              </div>

              <hr className="my-3" />
              <div className="discount">
                <label
                  htmlFor="offerTitle"
                  className="block mb-2 text-sm text-bold text-xl font-medium text-gray-900 dark:text-white"
                >
                  Bundle discount
                </label>

                <div className="flex items-center ml-4 mb-2">
                  <input
                    id="bundle_disc1"
                    type="radio"
                    name="bundle_disc"
                    onChange={(e) => handleDiscount("add_discount")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    checked={discountStatus === "add_discount"}
                  />
                  <label
                    htmlFor="bundle_disc1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"
                  >
                    Add Discount
                  </label>
                </div>

                {discountStatus === "add_discount" && (
                  <>
                    <div className="add_discount_box my-2 ml-8">
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-14 p-2 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6] focus:border-none"
                        value={discountValue}
                        onChange={(e) => handleDiscountVal(e)}
                      />
                      <Select
                      className="w-28"
                        closeMenuOnSelect={true}
                        options={discountParam}
                        components={animatedComponents}
                        value={selectedDiscountType}
                        menuPlacement="auto"
                        onChange={handleDiscountType}
                        getOptionLabel={(option) => option.label}
                        formatOptionLabel={({ label }) => <div>{label}</div>}
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center ml-4 mb-2">
                  <input
                    id="bundle_disc2"
                    type="radio"
                    name="bundle_disc"
                    onChange={(e) => handleDiscount("free_gift")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    checked={discountStatus === "free_gift"}
                  />
                  <label
                    htmlFor="bundle_disc2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"
                  >
                    Free Gift
                  </label>
                </div>

                {discountStatus === "free_gift" && (
                  <>
                    <div className="free_gift_box my-2 ml-8">
                      {selectedProduct.map(
                        (val, index) =>
                          // console.log(val.selectedOption,"Val")
                          val.selectedOption && (
                            <div
                              key={index}
                              className="flex items-center mb-4 ml-5"
                            >
                              <input
                                id={`free-product${index + 1}-checkbox`}
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor={`free-product${index + 1}-checkbox`}
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Product #{index + 1}
                              </label>
                            </div>
                          )
                      )}
                    </div>
                  </>
                )}

                <div className="flex items-center ml-4 mb-2">
                  <input
                    id="bundle_disc3"
                    type="radio"
                    name="bundle_disc"
                    onChange={(e) => handleDiscount("no_discount")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 "
                    checked={discountStatus === "no_discount"}
                  />
                  <label
                    htmlFor="bundle_disc3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No Discount
                  </label>
                </div>
              </div>
              <hr className="my-3" />

              <div className="advanced-setting">
                <label
                  htmlFor="offerTitle"
                  className="block mb-2 text-sm text-bold text-xl font-medium text-gray-900 dark:text-white"
                >
                  Advanced settings
                </label>

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="customer-option-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) =>
                      handleCustomerOptionCheckbox("customer_choose")
                    }
                    checked={customerChecked}
                  />
                  <label
                    htmlFor="customer-option-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Customer must choose an option
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="customer_choose_tooltip"
                    className="w-4 h-8 ml-1"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 10c0-5.522 4.478-10 10-10 5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002h-2.136v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533h-2.266c.06-2.294 1.876-3.487 3.99-3.487 2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777v.139zm.17 3.012a1.344 1.344 0 0 1-1.327 1.328 1.32 1.32 0 0 1-1.328-1.328 1.318 1.318 0 0 1 1.328-1.316c.712 0 1.322.592 1.328 1.316z"
                    ></path>
                  </svg>

                  <div
                    id="customer_choose_tooltip"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Show “Choose an option” inside the variant selection and
                    block the main button until variants are manually selected.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="specific-country-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) =>
                      handleSpecificCountryCheckbox("specific_country")
                    }
                    checked={specificCountryChecked}
                  />
                  <label
                    htmlFor="specific-country-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Target specific countries
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="customer_choose_tooltip"
                    className="w-4 h-8 ml-1"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 10c0-5.522 4.478-10 10-10 5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002h-2.136v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533h-2.266c.06-2.294 1.876-3.487 3.99-3.487 2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777v.139zm.17 3.012a1.344 1.344 0 0 1-1.327 1.328 1.32 1.32 0 0 1-1.328-1.328 1.318 1.318 0 0 1 1.328-1.316c.712 0 1.322.592 1.328 1.316z"
                    ></path>
                  </svg>
                </div>
                {specificCountryChecked && (
                  <>
                    <div className="max-w-sm ml-5 mb-4">
                      <Select
                        closeMenuOnSelect={false}
                        isMulti={true}
                        searchable={true}
                        options={countries}
                        components={animatedComponents}
                        menuPlacement="auto"
                        onChange={handleCountry}
                        getOptionLabel={(option) => option.label}
                        formatOptionLabel={({ label }) => <div>{label}</div>}
                        placeholder="Select Country"
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="hide-storefront-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) =>
                      handleHideStoreFrontCheckbox("hide_storefront")
                    }
                    checked={hideStoreFrontChecked}
                  />
                  <label
                    htmlFor="hide-storefront-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Hide from storefront
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="customer_choose_tooltip"
                    className="w-4 h-8 ml-1"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 10c0-5.522 4.478-10 10-10 5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002h-2.136v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533h-2.266c.06-2.294 1.876-3.487 3.99-3.487 2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777v.139zm.17 3.012a1.344 1.344 0 0 1-1.327 1.328 1.32 1.32 0 0 1-1.328-1.328 1.318 1.318 0 0 1 1.328-1.316c.712 0 1.322.592 1.328 1.316z"
                    ></path>
                  </svg>
                </div>

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="specific-product-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) =>
                      handleSpecificProductCheckbox("specific_product")
                    }
                    checked={specificProductChecked}
                  />
                  <label
                    htmlFor="specific-product-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Show only on specific product pages
                  </label>
                </div>

                {specificProductChecked && (
                  <>
                    <div className="free_gift_box my-2 ml-8">
                      <p className="text-gray-500 ml-5 mb-4">
                        Mark the product pages you want this offer to show in.
                      </p>

                      {selectedProduct.map(
                        (val, index) =>
                          // console.log(val.selectedOption,"Val")
                          val.selectedOption && (
                            <div
                              key={index}
                              className="flex items-center mb-4 ml-5"
                            >
                              <input
                                id={`specific-product${index + 1}-checkbox`}
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor={`specific-product${
                                  index + 1
                                }-checkbox`}
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Product #{index + 1}
                              </label>
                            </div>
                          )
                      )}
                    </div>
                  </>
                )}

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="start-time-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) => handleStartTimeCheckbox("start_time")}
                    checked={startTimeChecked}
                  />
                  <label
                    htmlFor="start-time-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Set start time
                  </label>
                </div>

                {startTimeChecked && (
                  <>
                    <div className="relative max-w-sm ml-5 mb-4">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="end-time-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) => handleEndTimeCheckbox("end_time")}
                    checked={endTimeChecked}
                  />
                  <label
                    htmlFor="end-time-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Set end time
                  </label>
                </div>
                {endTimeChecked && (
                  <>
                    <div className="relative max-w-sm ml-5 mb-4">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select End Time"
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center mb-4 ml-5">
                  <input
                    id="round-discount-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) =>
                      handleRoundDiscountCheckbox("round_discount")
                    }
                    checked={roundDiscountChecked}
                  />
                  <label
                    htmlFor="round-discount-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Round discounted prices
                  </label>
                </div>
                {roundDiscountChecked && (
                  <>
                    <div className="roundSelectBox ml-5">
                      <Select
                        closeMenuOnSelect={true}
                        options={roundDiscount}
                        components={animatedComponents}
                        menuPlacement="auto"
                        onChange={handleRoundDiscount}
                        getOptionLabel={(option) => option.label}
                        formatOptionLabel={({ label }) => <div>{label}</div>}
                        placeholder="Select Round Discount"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1 fixed right-5 mb-5 border-solid border-2 border-clay-500 previewDiv">
            <div className="previewHead">
              <h3 className="text-lg text-center text-bold">Preview</h3>
            </div>
            <div className="previewBody p-2">
              <label
                htmlFor=""
                className="block mb-2 text-sm text-bold font-medium text-gray-900 dark:text-white"
              >
                Offer Header :{" "}
                {offerHeaderlength !== 0
                  ? offerHeader
                  : "Please enter offer header."}
              </label>
              <hr />

              {selectedProduct.map(
                (val, index) =>
                  // console.log(val.selectedOption,"Val")
                  index === 0 &&
                  val.selectedProduct && <BundlePreview data={offername} />
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterInOfferPage page="Bundle_Offer" />
    </>
  );
};

export default BundleOffer;
