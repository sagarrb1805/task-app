import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:"task 1 with id 1"
    },
    {
      id:2,
      text:"task 2 with id 2"
    },
  ])
  const redClick = ()=>{
    console.log("REd button clicked")
  }
  const greenClick = ()=>{
    console.log("Green button clicked")
  }
  return (
    <div className="App">
      <h1>Taks App</h1>
      <Button color='red' text="red button" onClick={redClick}/>
      <Button color='green' text="green button" onClick={greenClick}/>
      <Tasks tasks={tasks}></Tasks>
      <Footer name="Sagar R B"/>
    </div>
  );
}

export default App;
