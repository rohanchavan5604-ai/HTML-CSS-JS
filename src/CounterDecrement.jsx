import { Component } from "react";
class CounterDecrement extends Component {
constructor() {
    super();
    this.state = {"counter": 0}
    }
    decrement=()=>{
        this.setState({"counter":this.state.counter-1})
    }
    render() {
        return(
            <div>
                <h4>Counter is: {this.state.counter}</h4>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default CounterDecrement;