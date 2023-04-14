import { React, useContext, useState, useEffect } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import { BundleOfferStates } from "./context/BundleOfferContext";
const animatedComponents = makeAnimated();

const ProductSelection = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { selectedProduct, setSelectedProducts } =
    useContext(BundleOfferStates);
  const [items, setItems] = useState([
    { id: Date.now(), value: "" },
    { id: Date.now() + 1, value: "" },
  ]);
  useEffect(() => {
    setSelectedProducts([])
  }, []);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(props.productData);
  }, []);
  const handleAddNew = () => {
    // if (items.length < 4) {
    setItems([...items, { id: Date.now(), value: "" }]);
    // }
  };

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

  const product = allProducts.map((val, index) => {
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
      index:index
    };
  });

  const handleProductValue = (id, selectedOption) => {
    const data =   items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selectedProduct:allProducts[selectedOption.index],
          selectedVariant:allProducts[selectedOption.index].variants[0],
        };
      } else {
        return item;
      }
    })
    // console.log(data)
    setItems(data);
    setSelectedProducts(data);
  };

  // console.log(items, "Selected Product");
  const handleSpecificVariant = (itemId) => {
    const index = selectedItems.indexOf(itemId);
    if (index > -1) {
      // If the item is already selected, remove it from the array
      setSelectedItems([
        ...selectedItems.slice(0, index),
        ...selectedItems.slice(index + 1),
      ]);
    } else {
      // If the item is not already selected, add it to the array
      setSelectedItems([...selectedItems, itemId]);
    }
  };

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
                  onChange={(selectedOptions) => {
                    handleProductValue(item.id, selectedOptions);
                  }}
                  getOptionLabel={(option) => option.label}
                  formatOptionLabel={({ label }) => <div>{label}</div>}
                  placeholder="Select Product"
                />

                {item.selectedProduct && (
                  <>
                    <div className="flex items-center mt-4 ml-3">
                      <input
                        id={item.id}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        onChange={() => handleSpecificVariant(item.id)}
                        checked={selectedItems.includes(item.id)}
                      />
                      <label
                        htmlFor={item.id}
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Target specific variants
                      </label>
                    </div>

                    {selectedItems.includes(item.id) && item.selectedProduct && (
                      <>
                        <div className="my-2">
                        <select
                          name=""
                          id={`variant-select${item.id}`}
                          className="focus:border-none rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-1/3 block pl-2 p-2.5"
                          style={{"width":"100%"}}
                          // onChange={(e) => handleVariant(product.id, e)}
                        >
                          {allProducts
                            .find(
                              (product) => product.id === item.selectedProduct.id
                            )
                            .variants.map((variant) => (
                              <option key={variant.id} value={variant.id}>
                                {variant.title}
                              </option>
                            ))}
                        </select>
                        </div>
                      </>
                    )}
                  </>
                )}
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
