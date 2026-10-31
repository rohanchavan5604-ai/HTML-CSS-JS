import { Component } from "react";
class Employee extends Component {

    render() {
        return (
            <div>
                <h1>This Is child Component</h1>
                <h2>id is {this.props.id} and name is {this.props.name} and age is {this.props.age}</h2>
            </div>
        );
    }

}
export default Employee;