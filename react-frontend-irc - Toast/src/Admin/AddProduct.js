import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import AuthCheck from './Auth/AuthCheck';
import toast, { Toaster } from 'react-hot-toast';

export default function AddProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productname: '',
        productstock: '',
        productprice: '',
        productrating: '',
        productimg: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await AddData(product);
            toast.success('Product added !')
            setTimeout(()=>{
                navigate('/dashboard');
            },2000)
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <AuthCheck />
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card '>
                    <input type='text' placeholder='Product Name' name='productname' value={product.productname} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Stock' name='productstock' value={product.productstock} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Price' name='productprice' value={product.productprice} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Rating' name='productrating' value={product.productrating} onChange={handleInputChange} className='product-input' required />
                    <input type='text' placeholder='Img URL' name='productimg' value={product.productimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Add Product</button>
                </form>
            </div>
            <BackBtn />
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
        </div>
    );
}
