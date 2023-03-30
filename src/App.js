import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';
import { useState } from 'react';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:"task 1 with id 1",
      reminder:true
    },
    {
      id:2,
      text:"task 2 with id 2",
      reminder:true
    },
    {
      id:3,
      text:"task 3 with id 3",
      reminder:true
    },{
      id:4,
      text:"task 4 with id 4",
      reminder:false
    }
  ])
  const redClick = ()=>{
    console.log("REd button clicked")
  }
  const greenClick = ()=>{
    console.log("Green button clicked")
  }
  const onDelete = (id)=>{
    setTasks(tasks.filter((task)=>
      task.id !==id
    ))
  }
  const onRemind = (id) =>{
    setTasks(
      tasks.map((task) => task.id===id?{...task, reminder:!task.reminder}:task)
    )
  }
  const onAdd = (task) =>{
    console.log(task)
  }
  return (
    <div className="App">
      <h1>Tasks App</h1>
      <Button color='red' text="red button" onClick={redClick}/>
      <Button color='green' text="green button" onClick={greenClick}/>
      <AddTask onAdd={onAdd}/>
      <Tasks tasks={tasks} onClick={onDelete} onRemind={onRemind} />
      <Footer name="Sagar R B"/>
    </div>
  );
}

export default App;
