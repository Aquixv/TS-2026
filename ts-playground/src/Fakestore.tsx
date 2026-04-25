
import { useCart } from "./Usecontext";

export const Storefront = () => {
  const { cart, addToCart, clearCart } = useCart();
  const handleBuyHeadphones = () => {
    addToCart({
      id: Math.random().toString(),
      name: "Wireless Headphones",
      price: 199.99
    });
  };

  return (
    <div style={{ border: '2px solid green', padding: '20px', marginTop: '40px' }}>
      <h2>Popcart Reimagined</h2>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={handleBuyHeadphones}>Buy Headphones ($199)</button>
        <button onClick={clearCart} style={{ backgroundColor: 'darkred', color: 'white' }}>
          Empty Cart
        </button>
      </div>

      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', color: 'black' }}>
        <h3>Items in Cart: {cart.length}</h3>
        <ul>
          {cart.map((item) => (
            <li style={{ listStyle:"none"}} key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        
        {cart.length === 0 && <p>Your cart is empty.</p>}
      </div>
    </div>
  );
};