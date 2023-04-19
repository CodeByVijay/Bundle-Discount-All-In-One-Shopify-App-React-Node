import React from 'react'
import { Link } from "react-router-dom";
import themeColor from './themeColors';

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleToggle = () =>{
    setToggleMenu(!toggleMenu)
  }
  return (
    <>

<header>
      <div className={`px-4 py-2 content-center flex bg-[${themeColor['gray_100']}] border-b-2 border-[${themeColor['sky_400']}]`}>
        <h1 className={`px-4 py-2 text-[${themeColor['sky_400']}] text-lg font-black`}> <img src="https://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png" alt="" width="30" height="30"/></h1>
        <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
        <ul>
          <Link
                    to="/"
                    className={`md:inline-block cursor-pointer hover:text-[${themeColor['sky_700']}] text-base hover:font-extrabold text-[${themeColor['sky_400']}] font-bold border-b md:border-none py-3 px-3`}
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/offers"
                     className={`md:inline-block cursor-pointer hover:text-[${themeColor['sky_700']}] text-base  hover:font-extrabold text-[${themeColor['sky_400']}] font-bold border-b md:border-none py-2 px-3`}
                  >
                    Offers
                  </Link>

                  <Link
                    to="#"
                     className={`md:inline-block cursor-pointer hover:text-[${themeColor['sky_700']}] text-base  hover:font-extrabold text-[${themeColor['sky_400']}] font-bold border-b md:border-none py-2 px-3`}
                  >
                    Design
                  </Link>
          
        </ul>
        </div>
        <div className= "cursor-pointer md:hidden">
          <input class="menu-btn hidden" type="checkbox" id="menu-btn"/>
          <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
            <span onClick={handleToggle} class="navicon bg-white-darkest flex items-center relative"> <i class="fa fa-bars"></i></span>
          </label>
      </div>
      </div>
    </header>

          {/* <header>
            <nav className="flex items-center justify-between flex-wrap bg-[#10b981] p-4">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">
                  Bundle Discount
                </span>
              </div>
              <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md lg:flex-grow">
                  <Link
                    to="/"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/offers"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Offers
                  </Link>

                  <Link
                    to="#"
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                  >
                    Design
                  </Link>
                </div>
                <div>
                <Link
                  to="#"
                  className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                >
                  Preview
                </Link>
              </div>
              </div>
            </nav>
          </header> */}
    </>
  )
}

export default Header
