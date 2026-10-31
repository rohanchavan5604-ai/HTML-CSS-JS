import logo from './logo.svg';
import './App.css';

import Student from './Student';
import My_Info from './My_Info';
import StateExample from './StateExample';
import CounterExample from './CounterExample';
import Example from './Example';
import Employee from './Employee';
import Course from './Course';
import ConditionalRendering from './ConditionalRendering';
import Developer from './Developer';
import CounterDemo from './CounterDemo';
import Trainer from './Trainer';
import Tester from './Tester';
import ConditionalExample from './ConditionalExample';
import LogicalAnd from './LogicalAnd';

// Missing imports added
// import Mounting from './Mounting';
import ComponentDidMountDemo from './ComponentDidMountDemo';
import UpdateComponent from './UpdateComponent';


function App() {
  return (
    <div className="App">

      <h1>This is my first react project</h1>
      <h1>This is App.js component</h1>

      {/* <Student></Student>
      <My_Info></My_Info>
      <StateExample></StateExample>
      <CounterExample></CounterExample>
      <Example></Example>

      <Employee id={1} name="Rohan" age={21}></Employee>

      <Course
        id={101}
        name="React"
        duration="2 weeks"
        fees={500}
      ></Course> */}

      {/* <ConditionalRendering></ConditionalRendering> */}

      {/* <Developer></Developer>
      <CounterDemo></CounterDemo>

      <Trainer id={101} name="Tushar" exp={2}></Trainer>

      <Tester
        id={102}
        name="Aniket"
        exp={3}
        email="aniket@gmail.com"
      ></Tester>

      <ConditionalExample></ConditionalExample> */}

      {/* <LogicalAnd></LogicalAnd> */}

      {/* Missing components added */}
      {/* <Mounting></Mounting> */}

      <ComponentDidMountDemo ></ComponentDidMountDemo>
      <UpdateComponent></UpdateComponent>

    </div>
  );
}

export default App;