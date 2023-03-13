import React,{ useState } from "react";
import CompButton from "./Component/CompButton";
import CompTable from "./Component/CompTable";
import CompTiIn from "./Component/CompTiIn";
import './App.css';

function App(){
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
 
  const handleNameChange = (event) =>{
     setName(event.target.value);
  }

 const handleAgeChange = (event) =>{
    setAge(event.target.value);
  }

 const handleStatusChange = (event) =>{ 
    setStatus(event.target.value);
 };

 const handleSubmit = () =>{
  if(!name || !age || !status){
    setError("Please fill complete input!");
    return
  }


     setData([...data,{ name: name, age: age, status: status }]);
   setName("");
   setAge("");
   setStatus("");
   setError("");
 };

 return (
  <div className="myDiv">
     <h1>Form Data Input</h1>
     <CompTiIn 
       label="Name" 
       type="text"
       name="name"
       onChange={handleNameChange}> <br/>
     </CompTiIn> 
     <br/>
     <CompTiIn
       label="Age "
       type="number"
       name="age"
       value={age}
       onChange={handleAgeChange}
            />
            <br/>
     <CompTiIn
       label="Status"
       type="text"
       name="status"
       value={status}
              onChange={handleStatusChange}
       /><br/>
       {error && <p style={{color :"red"}} >{error}</p>}
       <CompButton onClick={handleSubmit}>Submit</CompButton>
      <CompTable data={data} /><br/>
     </div>);}

     export default App
