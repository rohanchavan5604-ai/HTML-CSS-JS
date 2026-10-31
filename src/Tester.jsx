function Tester(props) {
    return (
        <div>
            <h1>This is Parent Component</h1>
            <h2>id is {props.id} and name is {props.name} and exp is {props.exp} years and email is {props.email}</h2>
        </div>
    );
}
export default Tester;