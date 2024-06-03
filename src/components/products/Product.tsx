import ProductModel from '../../models/ProductModel'
import { deleteProduct } from '../../api/products-api';

import "./product.css"
import { useNavigate } from 'react-router-dom';

type props = {
    p: ProductModel;
    // reload: () => void;
}

const Product = (props: props) => {
    
    const nav = useNavigate()

    const deleteIt = async () => {
        const res = await deleteProduct(props.p.id);
        if (res) {
            alert("Product deleted successfully!")
            nav("/products")
        }
        // props.reload()
        // todo: update parent component about the deletion

    }

    return (
        <div className='p-box'>
            <p className='p-title'> {props.p.id} - {props.p.name} </p>
            <p className='p-title'> price: {props.p.price} </p>
            <img className='p-image' src={props.p.imageUrl} alt='not found' />
            <br/>
            <button className='p-but' onClick={deleteIt}> delete </button>
    </div>
  )
}

export default Product