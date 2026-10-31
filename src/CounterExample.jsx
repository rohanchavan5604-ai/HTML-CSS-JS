import {Component} from "react";
class CounterExample extends Component {
    constructor() {
        super();
        this.state = {
            "counter": 0
        }
    }
    update=() => {
        this.setState({"counter":1,"Data":100})
    }
    render() {
        return (
            <div>
            <h5>Counter Value is {this.state.counter}</h5>  
            <h4>Data is {this.state.Data}</h4>
            <button onClick={this.update}>Update</button>
            </div>
        );
    }
}
export default CounterExample;