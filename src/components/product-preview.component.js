import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { ProductsContext } from '../context/products.context';

import './product-preview.styles.scss';

const ProductPreview = (product) => {
    //each ProductPreview shows title, description and one image
    const{title, description, images} = product.product;
    const imageUrl = images[0];

    const navigate = useNavigate();
    const {setCurrentProduct} = useContext(ProductsContext)

    const onClickHandler = () => {
        // after clicking on the product title or image,
        //currentProduct is populated with all product information 
        // and we navigate to /productOverview -> productOverview component
        setCurrentProduct(product.product);
        navigate('/productOverview');
    }

    return (
        <div className ='product-preview-container' >
            <div className='image-container'>
                <img alt='product' src={imageUrl} onClick={onClickHandler}/>
            </div>
            <div className='product-details-container'>
                <h1 className='title' onClick={onClickHandler}>{title}</h1>
                <h2 className='description'>{description.trim()}</h2>
            </div>
        </div>
    )
}

export default ProductPreview