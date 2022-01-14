import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../../redux/action/action';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom'; 

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product))
    }


    useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);    
    
    const Loading = () =>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div>
            </>
        );
    };

    const ShowProduct = () =>{

        const [cartBtn, setCartBtn ] = useState("Add to Cart")

        const proid = useParams();
        const proDetail = DATA.filter(x=>x.id == proid.id)
        const product = proDetail[0];
        console.log(product);

        const dispatch = useDispatch();

        const handleCart = (product) => {
            if(cartBtn == "Add to Cart"){
                dispatch(addCart(product))
                setCartBtn("Remove from Cart")
            }
            else{
                dispatch(delCart(product))
                setCartBtn("Add to Cart")
            }
        }

        const state = useSelector(state => state.addCart )
        return(
            <>
                <div className="container my-5 py-3">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center mx-auto product">
                            <img src={product.image} alt={product.title} height="400px" width="400px"/>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h4 className='text-uppercase text-black-50'>
                                {product.category}
                            </h4>
                            <h1 className='display-5'>{product.title}</h1>
                            <p className='lead'>
                                Avaliação {product.rating && product.rating.rate}  <i className='fa fa-star'></i>
                            </p>
                            <h3 className='display-6 fw-bold my-4'>
                                R${product.price}
                            </h3>
                            <p className="lead">{product.description}</p>
                            <button className="btn btn-outline-dark" onClick={()=>addProduct(product)}>
                                Adicionar ao carrinho
                            </button>
                            <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2">
                                Ir ao Carrinho
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}

export default Product;
