import { Component } from "react";
class ConditionalRendering extends Component {
    constructor() {
        super();
        this.state = {"isLoggedIn": false }
    }
    update=()=>{
        this.setState({"isLoggedIn":true})
    }
    render() {
        return (
        <div>
            {this.state.isLoggedIn ? <h1>Welcome Rohan</h1> : <h1>Welcome Guest plz login</h1>}
            <button onClick={this.update}>Login</button>
        </div>
        )
    }
}
export default ConditionalRendering;
