import { Component } from "react";

type counterProps ={
message:string;
}
type CounterState = {
count:number;
}
export class Counter2 extends Component<counterProps, CounterState>{
state = {
count:0,
}
handleClick = () => {
this.setState((prevState) => ({count: prevState.count + 1}))
}
render () {
return (
<div>
    <div style={{ border: '.5px solid green', padding: '20px', marginTop: '40px' }}>
    <button onClick={this.handleClick}>Increase</button>
    {this.props.message} {this.state.count}
</div>
</div>
)
}
}