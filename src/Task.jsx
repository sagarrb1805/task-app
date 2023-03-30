import React from 'react'
import {GiSkullCrossedBones} from 'react-icons/gi'

function Task({ts, onClick}) {
  return (
    <div style={{background:"#e6ffff"}}>
        <h2>{ts.text} <GiSkullCrossedBones style={{color:'red'}} onClick={()=>onClick(ts.id)}/></h2>
    </div>
  )
}

export default Task
