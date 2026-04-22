import type { Product } from "./types";
interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div style={{ border: '1px dashed gray', padding: '15px', margin: '10px' }}>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <small>Product ID: {item._id}</small>
     <p>Available? {item.Available ? "Yes" : "No"}</p>
    </div>
  );
};

export default ProductCard;