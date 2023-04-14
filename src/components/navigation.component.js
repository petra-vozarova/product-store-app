import {  useContext } from "react";
import { ProductsContext } from "../context/products.context";
import Button from "./button.component";
import './navigation.styles.scss';

const Navigation = () => {

    const {setCurrentPage, products} = useContext(ProductsContext)
    var pageNo;
    if(products){
        //checking the length of products array to define how many pages will be needed
        pageNo = Math.ceil(products.length / 10);
    }

    const changePage = (e) => {
        //after buttons is clicked, its value is used to set currentPage number
        //the value is an index therefore we use +1 
        const displayPage = +e.target.value +1;
        setCurrentPage(displayPage);
    }
    return (
        <div className="navigation-container">
            <div className="buttons-container">

            
                {
                    //using page number calculated above, buttons are being dynamicaly populated (one per page)
                    [...Array(pageNo)].map((_, i) => {
                        return(
                            <Button key={i +1} onClick={changePage} value={i}>{i +1}</Button>
                        )
                    }) 
                }
            </div>
           
        </div>
    )
}

export default Navigation