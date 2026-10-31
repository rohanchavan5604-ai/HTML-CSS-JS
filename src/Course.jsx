import { Component } from 'react';
class Course extends Component {
    render() {
        return (
            <div>
                <h2>Course id {this.props.id} course name {this.props.name} or course duration {this.props.duration} or fees is {this.props.fees}</h2>
            </div>
        );
    }
}
export default Course;