import React, { Component } from 'react';

export default class UpdateComponent extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    shouldComponentUpdate() {
        console.log("This is shouldComponentUpdate example...");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("previous value of counter is "+prevState.counter);
    }
    update = () => {
        this.setState(
            { counter: this.state.counter + 1 },
            () => console.log(this.state.counter)
        );
    };

    render() {
        return (
            <div>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.update}>Update</button>
            </div>
        );
    }
}