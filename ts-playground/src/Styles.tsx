import type { ContainerProps } from './types';

export const Container = ({ children, styles }: ContainerProps) => {
  return (
    <div style={styles}>
      {children}
    </div>
  );
};