import type { CustomButtonProps } from "./types";
type InternalButtonProps = {
  children: string;
};

type EventButtonProps = {
  children: string;
  handleExternalClick: () => void;
};


export const CustomButton = ({ children, handleClick }: CustomButtonProps) => {
  return (
    <button 
      onClick={handleClick} 
      style={{ padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
};
export const InternalButton = ({ children }: InternalButtonProps) => {
  const handleInternalClick = () => {
    alert(`INTERNAL ACTION: You clicked "${children}"`);
  };

  return (
    <button 
      onClick={handleInternalClick} 
      style={{ padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'lightblue' }}
    >
      {children}
    </button>
  );
};

export const EventButton = ({ children, handleExternalClick }: EventButtonProps) => {
  return (
    <button 
      onClick={handleExternalClick} 
      style={{ padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'lightgreen' }}
    >
      {children}
    </button>
  );
};