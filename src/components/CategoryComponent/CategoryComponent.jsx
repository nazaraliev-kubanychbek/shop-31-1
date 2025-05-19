import { useEffect, useState } from "react";
import axios from "axios";
import Card from '../Card/Card';

const CategoryComponent = ({category='', limit=0}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios(
            limit > 0
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data})=> setProducts(data));
    }, [])
    return (
        <div className="container">
            <br />
            <h1>{category}</h1>
            <br />
            
        </div>
    );
}

export default CategoryComponent;
