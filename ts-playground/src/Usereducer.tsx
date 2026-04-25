import { useReducer } from "react";

type CounterState = {
  count: number;
};
type CounterAction = 
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number }
  | { type: 'reset' }; 

  const initialState = {count:0}

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

export const Counter = () => {
const [state, dispatch] = useReducer(reducer, initialState)
return(
<div>
Count: {state.count}
<button onClick={() => dispatch({type:"increment", payload:10})}>Add 10</button>
<button onClick={() => dispatch({type:"decrement", payload:10})}>Remove 10</button>
<button onClick={() => dispatch({ type: "reset"})}>
  Reset
</button>
</div>
)
}

// Strict Actions for Usereducers

 // import { useReducer } from "react";

// type CounterState = {
//   count: number;
// };'
// type UpdateAction = {
// type: 'increment' | "Decrement"
// payload: number;
// }
// type ResetAction = {
//     type: 'reset'
// }
// type CounterAction = UpdateAction | ResetAction

//   const initialState = {count:0}

// export const reducer = (state: CounterState, action: CounterAction) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + action.payload };
//     case 'decrement':
//       return { count: state.count - action.payload };
//     case 'reset':
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// export const Counter = () => {
// const [state, dispatch] = useReducer(reducer, initialState)
// return(
// <div>
// Count: {state.count}
// <button onClick={() => dispatch({type:"increment", payload:10})}>Add 10</button>
// <button onClick={() => dispatch({type:"decrement", payload:10})}>Remove 10</button>
// <button onClick={() => dispatch({ type: "reset"})}>
//   Reset
// </button>
// </div>
// )
// }