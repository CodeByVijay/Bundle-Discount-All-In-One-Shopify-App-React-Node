import {React,useState} from 'react'

const FooterInOfferPage = (props) => {
  const [buttonText, setButtonText] = useState("Save & Activate");
  
    const handleSaveClick=()=>{
      setButtonText("Please Wait...")
      setTimeout(() => {
        // alert(props.page)
        setButtonText("Save & Activate")
      }, 2000);
    }
  return (
    <>
      <div
        className="footer w-full h-14 bg-[#f9fafb] border-solid border-t-2 border-[#e5e7eb]"
        style={{ position: "fixed", bottom: "0", zIndex: "9999999999" }}
      >
        <input type="hidden" value={props.page} />
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-1 col-end-3">
            <button className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 mb-2">
              Cancle
            </button>
          </div>
          <div class="col-end-7 col-span-2 text-right">
            <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 mb-2" onClick={(e)=>handleSaveClick(e)} >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterInOfferPage
