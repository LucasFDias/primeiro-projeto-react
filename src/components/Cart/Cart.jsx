import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux'; 
import { useParams } from 'react-router-dom';
import handleCart from '../../redux/reducer/handleCart';

const Cart = () => {
    const state = useSelector(state => state.handleCart)   
    const dispatch = useDispatch();
   

    const cartItem = (CartItem) => {
        
        return (
            <>
                <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={product.image} alt={product.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} X ${product.price} = ${product.qty * product.price}
                                </p>
                                <button className="btn btn-outline-dark me-4" onClick={()=>handleButton(product)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                
                                <button className="btn btn-outline-dark" onClick={()=>handleButton(product)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div> 
            </>
        )
    }
}

export default Cart;
