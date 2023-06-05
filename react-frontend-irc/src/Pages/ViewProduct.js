// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { FindData } from '../services/api'
// import { BackBtn } from '../Componentes/Buttons'
// export default function ViewProduct() {
//     const { productId } = useParams();
//     const [product, setProduct] = useState({
//         productname: '',
//         productstock: '',
//         productprice: '',
//         productrating: '',
//         productimg: '',
//     });
//     useEffect(() => {
//         fetchProduct();
//     }, []);
//     const fetchProduct = async () => {
//         try {
//             const response = await FindData(productId);
//             setProduct(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     return (
//         <div className='product-view'>
//             <div className='product-container-main cardx'>
//                 <div className='product-img-main'>
//                     <img src='' alt='product-image' className='product-conver' />
//                 </div>
//                 <div className='product-content-main'>
//                     <h1 className='product-title'>

//                     </h1>
//                     <h3 className='product-price'>

//                     </h3>
//                     <h3 className='product-rating'>

//                     </h3>
//                 </div>

//             </div>
//             <BackBtn/>
//         </div>
//     )
// }
