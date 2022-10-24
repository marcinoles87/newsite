import React  from "react";

import ProductStyle from '../components/ProductStyle.css';


const Product = () => {
    return ( 
        <div className="product">
            <h1> Our Products </h1>
            
            <div className="product_item1">
                <h1>Product 1</h1>
                <div className="item">
                    <p>product 1</p>
                </div>
             </div>

             <div className="product_item2">
                <h1>Product 2</h1>
                <div className="item">
                    <p>product 1</p>
                </div>
             </div>

        
            </div>

        
     );
}
 
export default Product;