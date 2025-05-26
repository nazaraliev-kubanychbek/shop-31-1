import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import './detail.scss';
import { addCart } from "../../redux/reducer";
import {useDispatch} from 'react-redux';

const DetailPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setProduct(data))
    }, [params])
    return (
        <div className="detail">
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={product.image} alt="" className="detail-img" />
                    </div>
                    <div className="col-6">
                        <h2>{product.title}</h2>
                        <br />
                        <p>{product.description}</p>
                        <br />
                        <p>{product.category}</p>
                        <br />
                        <p>${product.price}</p>

                        <button className="detail-btn" onClick={()=>{
                            dispatch(addCart(product))
                        }}>buy</button>
                        <button className="detail-btn" onClick={()=>{
                            navigate(-1)
                        }}>go back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
