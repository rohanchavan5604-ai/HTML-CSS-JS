import { Component } from 'react';
class Student extends Component {
    constructor() {
        super();
        console.log("Student constructor called");
    }
    render() {
        return (
            <div>
                <h1>This is First Component class</h1>
            </div>
        );
    }
}
export default Student;