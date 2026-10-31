import {useState} from 'react';
function CounterDemo() {
    let [count,setCount]=useState(0);
    return (
        <div>
            <h1>Counter Demo</h1>
            <h2>Counter Value is {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click here to update</button>

        </div>
    )
}
export default CounterDemo;