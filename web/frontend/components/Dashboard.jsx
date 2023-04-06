import React,{useContext} from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";


function Dashboard() {

  const tblColumns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Offer Name",
      selector: (row) => row.offer_name,
      sortable: true,
    },
    {
      name: "Offer Title",
      selector: (row) => row.offer_title,
      sortable: true,
    },
    {
      name:"Action",
    cell: (row) => (
        <>
      <span onClick={() => handleButtonClick(row.id)} className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><i className="fa fa-pencil"></i></span>
      <span onClick={() => handleButtonClick(row.id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><i className="fa fa-trash-o"></i></span>
      </>
    ),
    
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  ];
  const tableData = [
    {
      id: "1",
      offer_name: "Volume Discount",
      offer_title: "Buy 2 get 10% off",
      
    },
    {
      id: "2",
      offer_name: "Bundle Discount",
      offer_title: "Buy 2 get 1 free.",
      
    },
    {
      id: "3",
      offer_name: "Volume Discount",
      offer_title: "Buy 3 get 20% off",
      
    },
    {
      id: "4",
      offer_name: "Bundle Discount",
      offer_title: "Buy 4 get 2 free",
      
    },
    {
      id: "5",
      offer_name: "Volume Discount",
      offer_title: "Buy 2 get 10% off",
      
    },
    {
      id: "6",
      offer_name: "Bundle Discount",
      offer_title: "Buy 2 get 1 free.",
      
    },
    {
      id: "7",
      offer_name: "Volume Discount",
      offer_title: "Buy 3 get 20% off",
      
    },
    {
      id: "8",
      offer_name: "Bundle Discount",
      offer_title: "Buy 4 get 2 free",
      
    },
    {
      id: "9",
      offer_name: "Volume Discount",
      offer_title: "Buy 2 get 10% off",
      
    },
    {
      id: "10",
      offer_name: "Bundle Discount",
      offer_title: "Buy 2 get 1 free.",
      
    },
    {
      id: "11",
      offer_name: "Volume Discount",
      offer_title: "Buy 3 get 20% off",
      
    },
    {
      id: "12",
      offer_name: "Bundle Discount",
      offer_title: "Buy 4 get 2 free",
      
    },
  ];

  const handleAllSelectedRows = ({selectedRows})=>{
console.log(selectedRows)
  }

  const handleButtonClick = (id) => {
    // e.preventDefault();
    console.log("Row Id", id);
};
  
  return (
    <>
      <div className="main p-4 mt-5">
        <div className="shadow container flex flex-col h-100 justify-center items-center p-5">
          {Object.keys(tableData).length !== 0 ? (
            <>
              <div className="makeNewOfferBtn">
                <Link to="/offers">
                  <button className="bg-[#10b981] hover:bg-[#047857] text-base text-white py-2 px-5 rounded-full m-2">
                    <i className="fa fa-plus-square"></i> Make new offer
                  </button>
                </Link>
              </div>
              <DataTable columns={tblColumns} data={tableData} selectableRows pagination onSelectedRowsChange={handleAllSelectedRows}/>
              {/* <table
                className="border-collapse border border-slate-400 table-auto"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th className="border border-slate-300">#</th>
                    <th className="border border-slate-300">Offer Name</th>
                    <th className="border border-slate-300">Offer Title</th>
                    <th className="border border-slate-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((x) => (
                    <tr>
                      <td className="border border-slate-300 text-center">
                        {x.id}
                      </td>
                      <td className="border border-slate-300 text-center">
                        {x.offer_name}
                      </td>
                      <td className="border border-slate-300 text-center">
                        {x.offer_title}
                      </td>
                      <td className="border border-slate-300 text-center">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </>
          ) : (
            <div className="border-[#047857] p-10 border-dotted border-2 shadow-lg shadow-[#047857] hover:shadow-lg hover:shadow-[#10b981] hover:border-solid hover:bg-[#f1f2f3] hover:transition-shadow">
              <div className="bundleImage">
                <img
                  src="https://i0.wp.com/www.masonbullock.co.uk/wp-content/uploads/2021/03/counter-offer-4.jpg?fit=275%2C213&ssl=1"
                  alt=""
                  className="object-contain h-35 w-40 border-solid border-2"
                />
              </div>

              <div className="button mt-11">
                <Link to="/offers">
                  <button className="bg-[#10b981] hover:bg-[#047857] text-base text-white font-bold py-3 px-10 rounded-full">
                    Make First Offer
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
