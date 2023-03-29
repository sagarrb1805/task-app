import React from 'react'

function Tasks({tasks}) {
  return (
    <div>
        
     {tasks.map((task)=>(
        <h2 key={task.id}>{task.text}</h2>
     ))}
    </div>
  )
}

export default Tasks
