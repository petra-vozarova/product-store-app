import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductsContext } from '../context/products.context';
import { PictureContext } from '../context/product-picture.context';
import Button from './button.component';

import './product-overview.styles.scss';

const ProductOverview = () => {
    const navigate = useNavigate();
    const {currentProduct} = useContext(ProductsContext)
    const {mainPicture, setMainPicture} = useContext(PictureContext)
    //getting list of available images
    const{images} = currentProduct;
    //below information will be extracted from currentProduct and displayed on the page
    const productDetailsTitles = ['brand', 'price', 'rating', 'stock', 'description'];

    const changeMainPictureUp = () => {
        //changing mainPicture that is being displayed by increasing index by 1 
        //until the end of list is reached and index is re-setted to 0
        const val = mainPicture + 1;
        if(val < images.length){
            setMainPicture(val);
        }
        else{
            setMainPicture(0)
        }
    }

    const changeMainPictureDown = () => {
        //changing mainPicture that is being displayed by decreasing index by 1 
        //until the beggining of list is reached and index is re-setted to the end
        let val = mainPicture - 1;
        if(val >= 0){
            setMainPicture(val);
        }
        else{
            val = images.length - 1;
            setMainPicture(val)
        }
    }

    const backToMenuHandler = () => {
        //Clicking on the button takes user to the main page
        navigate('/')
    }

    return(
        <div className ='product-container' data-testid='product-container' >
                    
            <h1 className='title' >{currentProduct.title}</h1>

            <div className='images-container'>
                <div className='main-picture'> 
                    <div className="arrow" onClick={changeMainPictureDown}>
                        &#10094;
                    </div>
                    <img alt='product' src={images[mainPicture]} />
                    <div className="arrow" onClick={changeMainPictureUp}>
                        &#10095;
                    </div>
                
                </div>
                <div className='other-pictures'>
                    {
                        //rendering all available pictures apart from the one that is currently displayed as the mainPicutre 
                        images.filter((_, idx) => 
                        idx !== mainPicture
                        ).map((image, index) => {
                            return(
                                <img key={index} alt='product' src={image} />
                            )
                        })
                    }
                </div>
            </div>

            <div className='product'>
                {
                    productDetailsTitles.map((item, index) => {
                        const name = item.toLocaleUpperCase() + ': ';
                        let details = String(currentProduct[item]).trim();
                        if(item === 'rating'){
                            // formating product information 
                            details = details.concat(' / 5')
                        }
                        if(item === 'price'){
                            // formating product information 
                            details = details.concat('$')
                        }
                        return(
                            <div className='inlineProductDetails' key={index}>
                                <h2 className='child'>{name}</h2>
                                <h3 className='child'>{details}</h3>
                            </div>
                        )
                    })
                }
            </div>

            <div className='go-back-button'>
                <Button onClick={backToMenuHandler} > Go To Menu</Button> 
            </div>    
        </div>
    )
}

export default ProductOverview