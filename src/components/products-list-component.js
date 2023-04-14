import { useContext } from 'react';

import { ProductsContext } from '../context/products.context';
import ProductPreview from "./product-preview.component";
import Navigation from './navigation.component';

import './products-list.styles.scss';

const ProductsList = () => {
    //Main component displayed when page loads

    const {products, currentPage} = useContext(ProductsContext);
    const cutOffPoint = currentPage * 10;
    const setOffPoint = cutOffPoint - 10;
    //Calculating indices of products to be displayed based on the currentPage number, every page shows up to 10 products

    return(
        <div className='app-main-container' data-testid='app-container'>
            <h1 className='app-title'>Products Catalogue</h1>
            {
                //filtering through the array of products to get corrent indices
                products && products.filter((_, idx) => 
                    idx >= setOffPoint && idx < cutOffPoint
                //mapping through filtered products and rendering ProductPreview for each product
                ).map((product) => {
                    return(
                        <ProductPreview key={product.id} product={product} />
                    )
                }) 
            }
            <Navigation></Navigation> 
        </div>
    )
}

export default ProductsList