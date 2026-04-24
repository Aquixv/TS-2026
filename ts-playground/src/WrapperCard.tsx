import type { WrapperCardProps } from './types';

const WrapperCard = ({ title, subtitle, children }: WrapperCardProps) => {
  return (
    <div style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      
      <h2>{title}</h2>
      {subtitle && <h4>{subtitle}</h4>}
      <div style={{ marginTop: '20px' }}>
        {children}
      </div>

    </div>
  );
};

export default WrapperCard;