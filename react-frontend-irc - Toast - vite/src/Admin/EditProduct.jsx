import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditData, FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import AuthCheck from './Auth/AuthCheck';
import toast, { Toaster } from 'react-hot-toast';

export default function EditProduct() {
    const { productId } = useParams();
    const navigate = useNavigate();
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
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
            await EditData(productId, product);
            // alert('Product updated !');
            toast.success('Product updated Successfully !')
            setTimeout(()=>{
                navigate('/dashboard');
            },2000)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <AuthCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card'>
                    <label>Product Name</label>
                    <input type='text' placeholder='Product Name' name='productname' value={product.productname} onChange={handleInputChange} className='product-input' required />
                    <label>Product Stock</label>
                    <input type='number' placeholder='Stock' name='productstock' value={product.productstock} onChange={handleInputChange} className='product-input' required />
                    <label>Product Price</label>
                    <input type='number' placeholder='Price' name='productprice' value={product.productprice} onChange={handleInputChange} className='product-input' required />
                    <label>Product Rating</label>
                    <input type='number' placeholder='Rating' name='productrating' value={product.productrating} onChange={handleInputChange} className='product-input' required />
                    <label>Product Picture URL</label>
                    <input type='text' placeholder='Img URL' name='productimg' value={product.productimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Update Product</button>
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
