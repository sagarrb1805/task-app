import React from 'react'
import {GiSkullCrossedBones} from 'react-icons/gi'

function Task({ts, onClick, onRemind}) {
  return (
    <div style={{width:"100%", background:"yellow"}}>
      <div className={`${ts.reminder?'reminder':''}`} style={{width:"50%"}} onDoubleClick={()=>onRemind(ts.id)}>
          <h2>{ts.text}</h2>
      </div>
      <div>
      <GiSkullCrossedBones style={{color:'red'}} onClick={()=>onClick(ts.id)}/>
      </div>
    </div>
  )
}

export default Task
