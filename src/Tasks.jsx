import {React} from 'react'
import Task from './Task'


function Tasks({tasks, onClick}) {
  return (
    <div>
        
     {tasks.map((task)=>(
        <Task key={task.id} ts={task} onClick={onClick} />
     ))}
    </div>
  )
}

export default Tasks
