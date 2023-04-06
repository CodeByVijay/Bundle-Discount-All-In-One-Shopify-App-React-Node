import { React, useState } from "react";

const CartGoalDiscountSelection = () => {
  const [count, setCount] = useState(1);

  const handleAddNew = () => {
    setCount(count + 1);
  };

  const handleDivRemove = (e) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
 
  function MainContent(data) {
    const [amt, setAmt] = useState(100);
    const [discountVal, setDiscountVal] = useState("10");

    const handleAmount = (e) => {
      setAmt(e.target.value);
    };
  
    const handleDiscountVal = (e) => {
      setDiscountVal(e.target.value);
    };
    return (
      <>
        <div
          key={data.count}
          className="optionSection my-3 border-solid border-2 border-[#cfcfcf] p-5 content-center"
        >
          <div className="quantity flex space-x-4">
            <label className="mt-2">Option #{data.count}</label>
            <span className="mt-2">Spend</span>

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Rs
              </span>
              <input
                type="text"
                id="website-admin"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => handleAmount(e)}
                value={amt}
              />
            </div>

            <span className="mt-2">and get</span>
            <div className="add_discount_box">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-14 p-2 pl-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3b82f6] dark:focus:border-[#3b82f6] focus:border-none"
                value={discountVal}
                onChange={(e) => handleDiscountVal(e)}
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
            {data.count > 1 && (
              <button
                className="deleteButton text-gray-500"
                onClick={() => handleDivRemove()}
              >
                <i className="fa fa-trash"></i>
              </button>
            )}
          </div>

          <div className="checkButtons">
            <div className="flex items-center mb-2">
              <input
                id={`custom-text-checkbox${data.count}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`custom-text-checkbox${data.count}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Custom text
              </label>
            </div>
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
             <MainContent count={index+1}/>
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
export default CartGoalDiscountSelection;
