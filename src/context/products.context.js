import { createContext, useState } from "react";

//ProductsContext stores all information for products, information of current product that is being viewed and the current page number.
//Products are populated upon loading the page, currentPage is initially set to 1, 
//currentProduct is populated when a user clicks on the product and navigates to its more detailed overview

export const ProductsContext = createContext({
    products: null,
    setProducts: () => null,
    currentProduct: null,
    setCurrentProduct: () => null,
    currentPage: 1,
    setCurrentPage: () => null,
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const[currentProduct, setCurrentProduct] = useState(null);
    const[currentPage, setCurrentPage] = useState(1);

    
    const value = {products, setProducts, currentProduct, setCurrentProduct, currentPage, setCurrentPage};

    return <ProductsContext.Provider value = {value}>{children}</ProductsContext.Provider>
}