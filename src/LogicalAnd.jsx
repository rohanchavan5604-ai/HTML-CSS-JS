import {useState} from 'react';
function LogicalAnd(){
    let [isAdmin, setIsAdmin] = useState(false);
    let employee={"empid":101, "name":"Rohan"}
    return(
        <div>{
             isAdmin && <button>Delete User</button>
            }
           <br></br>
           <button onClick={() => {setIsAdmin(true)}}>Click here for Admin login</button>
            <h1>Employee Id is {employee?.empid} and name is {employee.name}</h1>
         </div>
    )
   
}
export default LogicalAnd;