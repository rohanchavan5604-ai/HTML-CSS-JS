import { Component } from 'react';
class Example extends Component {

    constructor() {
        super();
        this.state={"counter":0}
    }
    increment=()=>{
        this.setState({"counter":this.state.counter+1})
    }
        decrement=()=>{
            this.setState({"counter":this.state.counter-1})
        }
    render() {
        return (
            <div>
                <h4>Counter is: {this.state.counter}</h4>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>

            </div>
        );
    }
}
export default Example;