import { React, useState } from "react";
import ProductSelection from "../ProductSelection";
import { useNavigate } from "react-router-dom";
import CartGoalDiscountSelection from "../CartGoalDiscountSelection";
import themeColor from "../themeColors";
import FooterInOfferPage from "./FooterInOfferPage";

const CartGoalOffer = () => {
  let navigate = useNavigate();

  const [offername, setOfferName] = useState("Buy more and save");
  const [offernamelength, setOfferNameLength] = useState();
  const [offerStatus, setOfferStatus] = useState("all_products");
  const [discountVal, setDiscountVal] = useState("10");

  const [excludeProductChecked, setExcludeProductChecked] = useState(false);

  const [highlightChecked, setHighlightChecked] = useState(false);
  const [highlightOptionCheckbox, setHighlightOptionCheckbox] = useState("");

  const [badgeChecked, setBadgeChecked] = useState(false);
  const [badgeOptionCheckbox, setBadgeOptionCheckbox] = useState("");

  const [customerChecked, setCustomerChecked] = useState(false);
  const [customerOptionCheckbox, setCustomerOptionCheckbox] = useState("");
  const [specificCountryChecked, setSpecificCountryChecked] = useState(false);
  const [specificCountryCheckbox, setSpecificCountryCheckbox] = useState("");
  const [hideStoreFrontChecked, setHideStoreFrontChecked] = useState(false);
  const [hideStoreFrontCheckbox, setHideStoreFrontCheckbox] = useState("");
  const [limitMaxChecked, setLimitMaxChecked] = useState(false);
  const [limitMaxCheckbox, setLimitMaxCheckbox] = useState("");

  const [specificProductChecked, setSpecificProductChecked] = useState(false);
  const [specificProductCheckbox, setSpecificProductCheckbox] = useState("");

  const [startTimeChecked, setStartTimeChecked] = useState(false);
  const [startTimeCheckbox, setStartTimeCheckbox] = useState("");

  const [endTimeChecked, setEndTimeChecked] = useState(false);
  const [endTimeCheckbox, setEndTimeCheckbox] = useState("");

  const [roundDiscountChecked, setRoundDiscountChecked] = useState(false);
  const [roundDiscountCheckbox, setRoundDiscountCheckbox] = useState("");

  const handleOfferName = (e) => {
    let offerName = e.target.value;
    setOfferName(offerName);
    setOfferNameLength(e.target.value.length);
  };
  const handleOffers = (status) => {
    setOfferStatus(status);
    setExcludeProductChecked(false);
  };
  const handleExcludeProduct = () => {
    setExcludeProductChecked(!excludeProductChecked);
  };
  const handleDiscountVal = (e) => {
    setDiscountVal(e.target.value);
  };

  const handlehighlightOptionCheckbox = (status) => {
    setHighlightChecked(!highlightChecked);
    setHighlightOptionCheckbox(status);
  };
  const handleBadgeOptionCheckbox = (status) => {
    setBadgeChecked(!badgeChecked);
    setBadgeOptionCheckbox(status);
  };
  const handleCustomerOptionCheckbox = (status) => {
    setCustomerChecked(!customerChecked);
    setCustomerOptionCheckbox(status);
  };
  const handleSpecificCountryCheckbox = (status) => {
    setSpecificCountryChecked(!specificCountryChecked);
    setSpecificCountryCheckbox(status);
  };
  const handleHideStoreFrontCheckbox = (status) => {
    setHideStoreFrontChecked(!hideStoreFrontChecked);
    setHideStoreFrontCheckbox(status);
  };

  const handleLimitMaxCheckbox = (status) => {
    setLimitMaxChecked(!limitMaxChecked);
    setBadgeOptionCheckbox(status);
  };
  // const handleSpecificProductCheckbox = (status) => {
  //   setSpecificProductChecked(!specificProductChecked);
  //   setSpecificProductCheckbox(status);
  // };
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
              <h4 className="text-lg text-bold p-2">Cart Goal Discount</h4>
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
                onChange={handleOfferName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={
                  offernamelength !== 0 ? "" : "Please type offer header."
                }
                value={offername}
              />

              <hr className="my-3" />
              <div className="quantitySelect mb-2">
                <CartGoalDiscountSelection />
              </div>
              {/* <hr className="my-3" />

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
                    onChange={(e) => handleOffers("add_discount")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    checked={offerStatus === "add_discount"}
                  />
                  <label
                    htmlFor="bundle_disc1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"
                  >
                    Add Discount
                  </label>
                </div>

                {offerStatus === "add_discount" && (
                  <>
                    <div className="add_discount_box my-2 ml-8">
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-14 p-2 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6] focus:border-none"
                        value={discountVal}
                        onChange={(e) => handleDiscountVal()}
                      />
                      <select
                        name=""
                        id=""
                        className="focus:border-none focus:outline-none rounded text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">% Off</option>
                        <option value="">Rs. Off</option>
                      </select>
                    </div>
                  </>
                )}

                <div className="flex items-center ml-4 mb-2">
                  <input
                    id="bundle_disc2"
                    type="radio"
                    name="bundle_disc"
                    onChange={(e) => handleOffers("free_gift")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    checked={offerStatus === "free_gift"}
                  />
                  <label
                    htmlFor="bundle_disc2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"
                  >
                    Free Gift
                  </label>
                </div>

                {offerStatus === "free_gift" && (
                  <>
                    <div className="free_gift_box my-2 ml-8">
                      <div className="flex items-center mb-4 ml-5">
                        <input
                          id="product1-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          checked
                        />
                        <label
                          htmlFor="product1-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Product 1
                        </label>
                      </div>

                      <div className="flex items-center ml-5">
                        <input
                          id="product2-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="product2-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                        >
                          Product 2
                        </label>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center ml-4 mb-2">
                  <input
                    id="bundle_disc3"
                    type="radio"
                    name="bundle_disc"
                    onChange={(e) => handleOffers("no_discount")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 "
                    checked={offerStatus === "no_discount"}
                  />
                  <label
                    htmlFor="bundle_disc3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    No Discount
                  </label>
                </div>
              </div> */}
              <hr className="my-3" />

              <div className="advanced-setting">
                <label
                  htmlFor="offerTitle"
                  className="block mb-2 text-sm text-bold text-xl font-medium text-gray-900 dark:text-white"
                >
                  Advanced settings
                </label>

                {/* <div className="flex items-center mb-2 ml-5">
                  <label
                    htmlFor="preselected-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Preselect on load
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="preselected_tooltip"
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
                    id="preselected_tooltip"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Add a special banner on top of one of your options.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <div className="preselectedSelectBox">
                  <select
                    name=""
                    id=""
                    className={`focus:border-none focus:outline-none bg-[${themeColor["white"]}] rounded text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-2.5 ml-5 w-2/3 mb-2 border border-1 border-[${themeColor["gray"]}]`}
                  >
                    <option value="">Option #1</option>
                    <option value="">Option #2</option>
                    <option value="">None</option>
                  </select>
                </div>

                <div className="flex items-center mb-2 ml-5">
                  <input
                    id="variant-selection-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="variant-selection-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Variant single selection
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="variant_selection_tooltip"
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
                    id="variant_selection_tooltip"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Add a special banner on top of one of your options.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div> */}

                <div className="flex items-center mb-2 ml-5">
                  <input
                    id="highlight-option-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) =>
                      handlehighlightOptionCheckbox("highlight_choose")
                    }
                    checked={highlightChecked}
                  />
                  <label
                    htmlFor="highlight-option-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Highlight an option
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="highlight_choose_tooltip"
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
                    id="highlight_choose_tooltip"
                    role="tooltip"
                    className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Add a special banner on top of one of your options.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                {highlightChecked && (
                  <>
                    <select
                      name=""
                      id=""
                      className={`focus:border-none focus:outline-none bg-[${themeColor["white"]}] rounded text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-2.5 ml-5 w-2/3 mb-2 border border-1 border-[${themeColor["gray"]}]`}
                    >
                      <option value="">Option #1</option>
                      <option value="">Option #2</option>
                    </select>
                  </>
                )}

                <div className="flex items-center mb-2 ml-5">
                  <input
                    id="badge-option-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) => handleBadgeOptionCheckbox("badge_choose")}
                    checked={badgeChecked}
                  />
                  <label
                    htmlFor="badge-option-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Custom Badge
                  </label>
                  <svg
                    viewBox="0 0 20 20"
                    data-tooltip-target="badge_choose_tooltip"
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
                    id="badge_choose_tooltip"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Add a custom badge to show above the options text.
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                {badgeChecked && (
                  <>
                    <div className="customBadgeToolbox my-2 ml-11">
                      <div className="my-3">
                        <span>Badge text</span>
                      </div>
                      <input
                        type="text"
                        id="customText"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <div className="my-3">
                        <span>Show on</span>
                      </div>

                      <div className="flex items-center mb-4 ml-5">
                        <input
                          id="option-custom-checkbox"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="option-custom-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Option 1
                        </label>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center mb-2 ml-5">
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
                    <div className="relative max-w-sm ml-5 mb-4">
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
                        placeholder="Choose country"
                      />
                    </div>
                  </>
                )}

                <div className="flex items-center mb-2 ml-5">
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

                <div className="flex items-center mb-2 ml-5">
                  <input
                    id="limit-max-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    onClick={(e) => handleLimitMaxCheckbox("limit_max")}
                    checked={limitMaxChecked}
                  />
                  <label
                    htmlFor="limit-max-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Limit max discounts
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

                {limitMaxChecked && (
                  <>
                    <div className="flex items-center ml-8 mb-2">
                      <input
                        id="allow_doubles"
                        type="radio"
                        name="limit_max_radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="allow_doubles"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"
                      >
                        Allow doubles
                      </label>
                    </div>

                    <div className="flex items-center ml-8 mb-4">
                      <input
                        id="do_not_allow_doubles"
                        type="radio"
                        name="limit_max_radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="do_not_allow_doubles"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 focus:outline-none"
                      >
                        Do not allow doubles
                      </label>
                    </div>
                  </>
                )}

                <div className="flex items-center mb-2 ml-5">
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

                <div className="flex items-center mb-2 ml-5">
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

                <div className="flex items-center mb-2 ml-5">
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
                      <select
                        name=""
                        id=""
                        className="focus:border-none rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-1/3 block pl-2 p-2.5"
                      >
                        <option value="">.00</option>
                        <option value="">.49</option>
                        <option value="">.50</option>
                        <option value="">.95</option>
                        <option value="">.99</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1 fixed right-5 border-solid border-2 border-clay-500 previewDiv">
            <div className="previewHead">
              <h3 className="text-lg text-center text-bold">Preview</h3>
            </div>
            <div className="previewBody p-2">
              <label
                htmlFor=""
                className="block mb-2 text-sm text-bold font-medium text-gray-900 dark:text-white"
              >
                Offer Header :{" "}
                {offernamelength !== 0
                  ? offername
                  : "Please enter offer header."}
              </label>
            </div>
          </div>
        </div>
      </div>

    <FooterInOfferPage page="CartGoal_Offer"/>
    </>
  );
};

export default CartGoalOffer;
