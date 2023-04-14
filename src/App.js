import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductsContext } from "./context/products.context";
import populateData from './utils/dummyjson.utils';
import ProductOverview from "./components/product-overview.component";
import ProductsList from "./components/products-list-component";

import "./App.scss";

const App = () => {
  // setProducts will be used to populate products context
  const { setProducts } = useContext(ProductsContext);

  useEffect(() => {
    // calling populateData() to get products data upon mounting the document
    // storing available data in productsContext so they are accessible in other components of the app
    const getProducts = async () => {
      const products = await populateData();
      setProducts(products.products);
    };
    getProducts().catch((error) =>
      console.log(`Error ocurred in populateData function: ${error}`)
    );
  }, [setProducts]);

  return (
    //two routes are available
    //ProductsList is rendered when the page is open
    //ProductOverview is rendered, when user clicks on a single product
    <Routes>
      <Route index element={<ProductsList />} />
      <Route path="/productOverview" element={<ProductOverview />} />
    </Routes>
  );
};

export default App;
