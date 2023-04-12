import { React, useContext, useState } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import { BundleOfferStates } from "./context/BundleOfferContext";
const animatedComponents = makeAnimated();

const ProductSelection = (props) => {
  //  const [selectedOptions, setSelectedOptions] = useState([]);
  const { setSelectedProducts } = useContext(BundleOfferStates);
  const [items, setItems] = useState([
    { id: Date.now(), value: "" },
    { id: Date.now() + 1, value: "" },
  ]);

  const handleAddNew = () => {
    // if (items.length < 4) {
    setItems([...items, { id: Date.now(), value: "" }]);
    // }
  };
  // const handleAddNew = () => {
  //   setItems([
  //     { id: Date.now(), selectedOption: null },
  //     { id: Date.now() + 1, selectedOption: null },
  //     ...items,
  //   ]);
  // };

  const handleDivRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const Option = (props) => (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={props.data.imageSrc}
          alt={props.data.label}
          style={{ width: 50, marginRight: 8 }}
        />
        <div>{props.data.label}</div>
      </div>
    </components.Option>
  );

  const product = props.productData.map((val, index) => {
    let imageSrc = null;
    if (val.image && val.image.src) {
      imageSrc = val.image.src;
    } else {
      imageSrc =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png";
    }
    return {
      value: val.id,
      label: val.title,
      imageSrc,
    };
  });

  const handleProductValue = (id, selectedOption) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selectedOption: selectedOption.value,
          };
        } else {
          return item;
        }
      })
    );
  };
  setSelectedProducts(items)

  console.log(items,"Selected Product");

  return (
    <>
      <div
        className="products p-3 border-solid w-2/3 border-2 mt-2"
        id="products"
      >
        <div className="productContainer" id="productContainer">
          {items.map((item, index) => (
            <div key={item.id} className="product">
              {index > 1 && (
                <div class="productDivBtn">
                  <button
                    className="deleteButton text-gray-500"
                    onClick={(e) => handleDivRemove(item.id)}
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              )}

              <label>Product #{index + 1}</label>
              <div className="w-full my-4">
                <Select
                  closeMenuOnSelect={true}
                  isMulti={false}
                  // value={item.selectedOption ? { value: item.selectedOption } : null}
                  searchable={true}
                  options={product}
                  menuPlacement="auto"
                  components={{ Option, animatedComponents }}
                  onChange={(selectedOptions) =>{
                    handleProductValue(item.id, selectedOptions)
                  }
                  }
                  getOptionLabel={(option) => option.label}
                  formatOptionLabel={({ label }) => <div>{label}</div>}
                  placeholder="Select Product"
                />
              </div>
            </div>
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
export default ProductSelection;
