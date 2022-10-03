import React from "react";
import { Route , Routes , Link } from "react-router-dom";
import Product from "../components/Product";


const Products = () => {
    return (
        <div>
            <h1>To sa nasze produkty</h1>
            <Product/>
        </div>
      );
}
 
export default Products;