import ProductModel from '../../models/ProductModel'
import { deleteProduct } from '../../api/products-api';

import "./product.css"
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { LoadingButton } from '../../utils/LoadingButton';

type props = {
    p: ProductModel;
    // reload: () => void;
}

const Product = (props: props) => {
    
    const nav = useNavigate()
    const { setOrder } = useContext(AppContext)
    
    const deleteIt = async () => {

        // sleep 300 ms:
        // await new Promise((x)=>{setTimeout(x, 300)})

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
            {/* <button className='p-but' onClick={deleteIt}> delete </button> */}
            <LoadingButton loadingTxt="Deleting" onClick={deleteIt}> Delete </LoadingButton>
            
            <button className='p-but' onClick={()=>{setOrder((prev: ProductModel[])=>[...prev, props.p])}}> Add  </button>
    </div>
  )
}

export default Product