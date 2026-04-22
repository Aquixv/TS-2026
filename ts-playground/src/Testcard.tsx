import type { UserProfile } from "./types";

interface TestCardProps {
  user: UserProfile; 
}

const TestCard = ({ user }: TestCardProps) => {
  return (
    <div style={{ border: 'none', padding: '20px', margin: '10px' }}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Status: {user.isOnline ? "🟢 On" : "🔴 Off"}</p>
    </div>
  );
};

export default TestCard;