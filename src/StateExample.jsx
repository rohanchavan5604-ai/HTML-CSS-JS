import {Component} from "react";
class StateExample extends Component {
    constructor() {
        super();
        this.state={
            name: "Rohan Chavan",
            age: 21,}
    }
    render() {
        return (
            <div>
                <h1>My Name is {this.state.name} and age is {this.state.age}</h1>
                    
            </div>
        );
    }
}
export default StateExample;