import{useState} from 'react';
function Developer() {
    let [name,setName]=useState("Rohan");
    let [age,setAge]=useState(21);
    let [course,setCourse]=useState("Java Full Stack");
    return (
        <div>
            <h1>Welcome to the Developer page </h1>
            <h2>My name is {name} and my age is {age} and my course is {course}</h2>
            <button onClick={()=>setName("Aniket")}>update name</button>
            <button onClick={()=>setAge(22)}>update age</button>
            <button onClick={()=>setCourse("React")}>update course</button>

        </div>
    )
}
export default Developer;