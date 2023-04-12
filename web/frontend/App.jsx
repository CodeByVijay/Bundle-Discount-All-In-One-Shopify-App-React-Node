import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import {ProductsApiContext} from "./components/context/ProductsApiContext";
import Header from "./components/Header";
import { BundleOfferContext } from "./components/context/BundleOfferContext";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
   
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <BundleOfferContext>
          <QueryProvider>
          <ProductsApiContext>
            <NavigationMenu
              navigationLinks={[]}
            />
            <Header />
            <Routes pages={pages} />
            </ProductsApiContext>
          </QueryProvider>
          </BundleOfferContext>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
    
  );
}
