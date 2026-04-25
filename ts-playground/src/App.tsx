import { useState, useEffect } from 'react';
import './App.css';
import TestCard from './Testcard';
import type { UserProfile, Character } from './types'; 
import UserCard from './Users';
import Status from './Status';
import { InternalButton, EventButton, CustomButton } from './CustomButton';
import WrapperCard from './WrapperCard';
import { Container } from './Styles';
import { Counter } from './Usereducer';

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
const myAppLevelFunction = () => {
    alert("EXTERNAL ACTION: This alert came all the way from App.tsx!");
  };
  const myClickAction = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event);
    alert(`You clicked: ${event.currentTarget.innerText}`);
  };
  return (
    <div>
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
    <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
      <WrapperCard title="Dashboard" subtitle="Welcome back!"> 
      <InternalButton>
        I Handle Myself
      </InternalButton>
      <EventButton handleExternalClick={myAppLevelFunction}>
        App.tsx Controls Me
      </EventButton>
</WrapperCard>
    </div>
    </div>
    <div style={{ padding: '20px' }}>
      <h1>Event Props Testing</h1>
      <CustomButton handleClick={myClickAction}>
        Click Me to Test Events!
      </CustomButton>
<div style={{ marginTop: '40px' }}>
  <h1>Style Props Testing</h1>
  <Container styles={{ border: '2px solid blue', padding: '20px', marginBottom: '10px' }}>
    I am a blue box!
  </Container>
  <Container styles={{ backgroundColor: 'darkred', color: 'white', textAlign: 'center', padding: '10px' }}>
    I am a red warning box!
  </Container>
</div>
<div style={{ padding: '20px', border: '2px solid black', marginTop: '20px' }}>
        <h2>useReducer Test</h2>
        <Counter />
      </div>
    </div>
    </div>
  );
}

export default App;