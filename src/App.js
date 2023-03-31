import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';
import { useState } from 'react';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const redClick = ()=>{
    console.log("REd button clicked")
  }
  const greenClick = ()=>{
    setShowForm(!showForm)
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
    const id = Math.floor(Math.random()*10000 + 1)
    console.log(id)
    const newOne = {...task, id}
    setTasks([...tasks, newOne])
  }
  return (
    <div className="App">
      <h1>Tasks App</h1>
      <Button color='red' text="red button" onClick={redClick}/>
      <Button color={showForm ? "red":"green"} text={showForm ? "Exit":"Add"} onClick={greenClick}/>
      {showForm && <AddTask onAdd={onAdd}/>}
      <Tasks tasks={tasks} onClick={onDelete} onRemind={onRemind} />
      <Footer name="Sagar R B"/>
    </div>
  );
}

export default App;
