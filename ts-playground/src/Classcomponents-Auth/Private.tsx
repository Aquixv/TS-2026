import { Login } from "./Login";
import type { ProfileProps } from "./Profile";

export type PrivateProps = {
  isLoggedin: boolean;
  component: React.ComponentType<ProfileProps>; 
};

export const Private = ({ isLoggedin, component: Component }: PrivateProps) => {
if (isLoggedin) {
return( 
  <div style={{ border: '.5px solid green', padding: '20px', marginTop: '40px' }}>
<Component name='Ixv'/></div>
)
}
else{
return( 
  <div style={{ border: '.5px solid green', padding: '20px', marginTop: '40px' }}>
<Login/>
</div>
)
}}