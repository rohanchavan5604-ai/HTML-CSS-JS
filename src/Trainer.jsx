function Trainer(props) {
    return (
        <div>
           <h1>This is Child Component</h1> 
           <h2>id is {props.id} and name is {props.name} and exp is {props.exp} years</h2>     
        </div>
    );
}
export default Trainer;