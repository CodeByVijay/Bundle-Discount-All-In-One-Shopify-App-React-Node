import { React, useState } from "react";

const VolumeDiscountSelection = () => {
  const [count, setCount] = useState(1);

  const handleAddNew = () => {
    setCount(count + 1);
  };

  const handleDivRemove = (e) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function MainComponent(data) {
    const [discountVal, setDiscountVal] = useState("10");
    const [qtyTwo, setQtyTwo] = useState(1);
    const [qty, setQty] = useState(1);
    const [range, setRange] = useState("");

    const handleDiscountVal = (e) => {
      setDiscountVal(e.target.value);
    };
    const handleProductQtyTwo = (e) => {
      setQtyTwo(e.target.value);
    };
    const handleProductQty = (e) => {
      setQty(e.target.value);
    };
    const handleAddRange = (title) => {
      setRange(title);
    };
    return (
      <>
        <div
          key={data.count}
          className="optionSection my-3 border-solid border-2 border-[#cfcfcf] p-5 content-center"
        >
          <div className="quantity flex space-x-4">
            <label className="mt-2">Option #{data.count}</label>
            <span className="mt-2">Buy</span>
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => handleProductQty(e)}
              value={qty}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {/* {range === `add-range${data.count}` && (
              <> */}
            <span className="mt-2">-</span>
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => handleProductQtyTwo(e)}
              value={qtyTwo}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {/* </>
            )} */}

            <span className="mt-2">for</span>
            <div className="add_discount_box">
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

            {data.count > 1 && (
              <>
                <button
                  className="deleteButton text-gray-500"
                  onClick={() => handleDivRemove()}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </>
            )}
          </div>

          <div className="checkButtons">
            <div className="flex items-center mb-2">
              <input
                id={`add-range-checkbox${data.count}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                // onChange={(e) => handleAddRange(`add-range${data.count}`)}
              />
              <label
                htmlFor={`add-range-checkbox${data.count}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Add range
              </label>
            </div>
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
              <MainComponent count={index + 1} />
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
export default VolumeDiscountSelection;
