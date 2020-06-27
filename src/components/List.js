import React, { useState } from 'react'
import AddTask from './AddTask'
import taskService from '../services/taskService'
import listService from '../services/listService'
import { Card, Button } from '@material-ui/core/'

const List = ({ title, tasks, listId, color }) => {
  const [visible, setVisible] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    visible
      ? setVisible(false)
      : setVisible(true)
  }

  const removeTask = id => {
    taskService.remove(id)
  }

  const removeList = listId => {
    console.log(listId)
    listService.remove(listId)
  }

  return (
    <div>
      <Card style={{ 'borderLeft': `12px solid #${color}`}}>
        <h2>{title}</h2>
        {tasks.map(task => {
          return (
            <Card key={task.id}>
              <p key={task.id}>Name: {task.taskname}</p>
              <span>Description: {task.taskdescription}</span>
              <Button onClick={removeTask.bind(task.id)}>Remove task</Button>
            </Card>
          )
        }
        )}
        <Button
          onClick={handleClick}
        >Add task</Button>
        {visible === true && <AddTask listId={listId}/>}
      </Card>
    </div>
  )
}

export default List
