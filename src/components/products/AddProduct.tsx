import { useForm } from "react-hook-form";
import ProductModel from "../../models/ProductModel"
import { addProduct } from "../../api/products-api";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm<ProductModel>();
    
    const nav = useNavigate()
    
    const handleAddProduct = async (p: ProductModel) => {
        const res = await addProduct(p);
        if (res) {
            alert("Product added successfully!");
            nav("/home")
            // reset(); // clear all fields.
            // todo: redirect to home-page
        }
    }

  return (
      <div className="addp-wrap">
          <h2> Add Product</h2>
          <form onSubmit={handleSubmit(handleAddProduct)}>
              <label> Name :</label>
              <input {...register("name")}/>
              <label> price :</label>
              <input {...register("price")}/>
              <label> stock :</label>
              <input {...register("stock")}/>
              <label> image :</label>
              <input {...register("imageUrl")} />
              <Button> OK </Button>
          </form>

    </div>
  )
}

export default AddProduct