import { useState } from 'react';
import './App.css';


let data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }]


function App() {
  const [ip,setIp] = useState('');
  const [res,setRes] = useState("");
  const handleSubmit = (e)=>{
     e.preventDefault();
     let findData = data.find((ele)=>{
      return ele.word.toLowerCase() === ip.toLowerCase();
     })
     console.log(findData);
     setRes(findData)
  }
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}> 
        <input value={ip} onChange={(e)=>setIp(e.target.value)} placeholder="Search for a word..."/>
        <button type='submit'>Submit</button>
      </form>
      <h5>Definition:</h5>
      {res && res.meaning?<p>{res.meaning}</p>:""}
      {res===""?"":<p>Word not found in the dictionary.</p>}
    </div>
  );
}

export default App;
