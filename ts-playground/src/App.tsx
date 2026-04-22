import { useState } from 'react';
import './App.css';
import TestCard from './Testcard';
import type { UserProfile } from './types'; 
import ProductCard from './Product';
import type { Product } from './types';

function App() {
  const [user, setUser] = useState<UserProfile>({
    name: "Aqui", 
    age: 999,
    isOnline: true,
  });

  const toggleStatus = () => {
    setUser({ ...user, isOnline: !user.isOnline });
  };
const [Product, Setproduct] = useState<Product>({
    _id: "prod_98765",
    title: "Wireless Headphones",
    price: 199.99,
    Available: true,
  });
  const toggleProduct = () => {
    Setproduct({ ...Product, Available: !Product.Available });
  };
  return (
    <div>
      <h1>TypeScript Playground</h1>
      <TestCard user={user} />
      <button 
        onClick={toggleStatus} 
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Toggle Status
      </button>

<div>
      <ProductCard item={Product} />
      <button 
        onClick={toggleProduct} 
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Toggle Available
      </button>
    </div>
      
    </div>
  )
}

export default App;