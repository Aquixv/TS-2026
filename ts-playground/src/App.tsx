import { useState } from 'react';
import './App.css';
import TestCard from './Testcard';
import type { UserProfile } from './types'; 

function App() {
  const [user, setUser] = useState<UserProfile>({
    name: "Aqui", 
    age: 99,
    isOnline: true,
  });

  const toggleStatus = () => {
    setUser({ ...user, isOnline: !user.isOnline });
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
      
    </div>
  )
}

export default App;