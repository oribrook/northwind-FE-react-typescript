class ProductModel {
  id: number;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;

  constructor(
    name: string,
    price: number,
    stock: number,
    imageUrl: string,
    id: number = -1
  ) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.imageUrl = imageUrl;
    this.id = id;
  }
}

export default ProductModel;
