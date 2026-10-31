import { useState } from "react";
function ConditionalExample() {
    let [age, setAge] = useState(16);

    return(
        <div>
            <h1>Conditional Example</h1>
            <h2>Age is {age}</h2>
            {age >= 18 ? <h3>You are eligible for voting</h3> : <h3>You are not eligible for voting</h3>}
            <button onClick={() => setAge(age + 1)}>Click here to update age</button>
        </div>
    )
}
export default ConditionalExample;