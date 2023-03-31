import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';
import { useEffect, useState } from 'react';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    const getData = async () =>{
      const dataTasks = await fetchData();
      setTasks(dataTasks);
      console.log(dataTasks)
    }
    getData();
  }, [])

  const fetchData = async ()=>{

    const res = await fetch("http://localhost:5000/tasks")
    const data = res.json()
    return data
    
  }

  const redClick = ()=>{
    console.log("REd button clicked")
  }
  const greenClick = ()=>{
    setShowForm(!showForm)
  }
  const onDelete =  async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE'
    })
    setTasks(tasks.filter((task)=>
      task.id !==id
    ))
  }

  const onRemind = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({reminder:null}) //need to work on it
    })
    setTasks(
      tasks.map((task) => task.id===id?{...task, reminder:!task.reminder}:task)
    )
  }
  const onAdd = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    setTasks([...tasks, task])
    // const data = await res.json()
    // setTasks([...tasks, data])
    // const id = Math.floor(Math.random()*10000 + 1)
    // console.log(id)
    // const newOne = {...task, id}
    // setTasks([...tasks, newOne])
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
