import type { Character } from "./types";

interface UserProps {
  character: Character;
}

const UserCard = ({ character }: UserProps) => {
  return (
    <div style={{ border: '1px dashed gray', padding: '15px', margin: '10px' }}>
      <h3>{character.name}</h3>
      <p>Age: {character.age}</p>
      <small>Title: {character.title}</small>
      <p>Status: {character.status ? "Dead 💀" : "Alive 🟢"}</p>
    </div>
  );
};

export default UserCard;