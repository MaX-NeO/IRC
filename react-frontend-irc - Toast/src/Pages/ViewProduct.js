import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';

export default function ViewProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        productname: '',
        productstock: '',
        productprice: '',
        productrating: '',
        productimg: '',
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await FindData(productId);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='product-view'>
            <div className='product-container-main cardx'>
                <div className='product-img-main card-container'>
                    <img src={product.productimg} alt='fruit' className='product-cover' />
                </div>
                <div className='product-content-main'>
                    <h1 className='product-title'>{product.productname}</h1>
                    <h3 className='product-price'>Price: ₹ {product.productprice}</h3>
                    <h3 className='product-rating'>Rating: ⭐ {product.productrating}</h3>
                </div>
            </div>
            <BackBtn />
        </div>
    );
}
