import { useEffect, useState } from "react";
import { getProducts } from "../../api/products-api";
import Product from "./Product";
import ProductModel from "../../models/ProductModel";
import { useNavigate } from "react-router-dom";
import Input from '@mui/material/Input';


const Products = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [filterProducts, setFilterProducts] = useState<ProductModel[]>([]);
  const [search, setSearch] = useState<string>("");

  const nav = useNavigate();

  const load = async () => {
    const res = await getProducts();
    if (res) setProducts(res);
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    setFilterProducts(products.filter((p) => p.name.includes(search)));
  }, [search]);

  return (
    <div>
      <div>
        Search product:        
        <Input          
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <br/>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {search === "" &&
          products.map((p) => (
            <div
              onClick={() => {
                nav("/product/" + p.id);
              }}
            >
              <Product key={p.id} p={p} />
            </div>
          ))}
        {search !== "" &&
          filterProducts.map((p) => (
            <div
              onClick={() => {
                nav("/product/" + p.id);
              }}
            >
              <Product key={p.id} p={p} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
