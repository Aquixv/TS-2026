import { useState } from "react";
import type { User } from "./types";



export const LoginUser = () => {
  const [user, setUser] = useState<User | null> (null)
  const handleUser = () => {
    setUser({
    name:'Ixv',
    email: "Aquisolosxv@mailintor.com"
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return(
    <div>
    <button onClick={handleUser}>Login</button>
    <button onClick={handleLogout}>Get out</button>
    <div>Username is {user?.name}</div>
    <div>User Email is {user?.email}</div>
    </div>
  )
}
// Type Assertion method, Overriding the use of null as future value
// export const LoginUser = () => {
//   const [user, setUser] = useState<User>({} as User)
//   const handleUser = () => {
//     setUser({
//     name:'Ixv',
//     email: "Aquisolosxv@mailintor.com"
//     })
//   }
//   const handleLogout = () => {
//     setUser(null)
//   }
//   return(
//     <div>
//     <button onClick={handleUser}>Login</button>
//     <button onClick={handleLogout}>Get out</button>
//     <div>Username is {user.name}</div>
//     <div>User Email is {user.email}</div>
//     </div>
//   )
// }