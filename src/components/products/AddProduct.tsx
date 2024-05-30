import { useForm } from "react-hook-form";
import ProductModel from "../../models/ProductModel"
import { addProduct } from "../../api/products-api";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm<ProductModel>();
    
    const handleAddProduct = async (p: ProductModel) => {
        const res = await addProduct(p);

        if (res) {
            alert("Product added successfully!");
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
              <button> OK </button>
          </form>

    </div>
  )
}

export default AddProduct