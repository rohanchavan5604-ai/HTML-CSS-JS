import React, { Component } from "react";
class My_Info extends Component {
    
    age = 21;
    constructor() {
        super();
        console.log("My_Info constructor called");
    } 
    update=() => {
        this.age = 22;
        console.log("Age updated to " + this.age);
    }
    render() {
        return (
            <div>
                <h2>My Name Is Rohan Chavan</h2>
                <h2> Course is Java Fullstack</h2>
                <h4>My Hobbies are Listening to Music</h4>
                <h4>My Age is {this.age}</h4>
                <button onClick={this.update}>Click here to update</button>
            </div>
        );
    } 
}   
export default My_Info; 