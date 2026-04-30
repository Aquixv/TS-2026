import React from "react";
import { Private } from "./Classcomponents-Auth/Private";

export const PrivateComponent = (props: React.ComponentProps<typeof Private>) => {
return(
<div>
{props.isLoggedin}
</div>
)
}
// How to import props from other components