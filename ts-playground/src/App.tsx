import { useState, useEffect } from 'react';
import './App.css';
import TestCard from './Testcard';
import type { UserProfile, Character } from './types'; 
import UserCard from './Users';
import Status from './Status';

function App() {
  const [user, setUser] = useState<UserProfile>({
    name: "Aqui", 
    age: 999,
    isOnline: true,
  });

  const toggleStatus = () => {
    setUser({ ...user, isOnline: !user.isOnline });
  };

  const characterList: Character[] = [
    { name: "Aquii", age: 1000, title: "Mr", status: false },
    { name: "Stella", age: 2000, title: "Mrs", status: false },
    { name: "Goku", age: 4000, title: "Mr", status: true },
    { name: "Tomoe", age: 5000, title: "Mr", status: false }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === characterList.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(timer);
  }, [characterList.length]);

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

      <div style={{ marginTop: '40px' }}>
        <h1>Character Cycler</h1>
        <UserCard character={characterList[currentIndex]} />
      </div>
      <Status status="success" />
    </div>
  );
}

export default App;