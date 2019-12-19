import React, { useState } from 'react'
import taskService from '../services/taskService'
import { Card, Input, Button } from '@material-ui/core'

const AddTask = ({ listId }) => {
  const [newTaskName, setTaskName] = useState('')
  const [newTaskDesc, setTaskDesc] = useState('')

  const handleNameChange = event => {
    setTaskName(event.target.value)
  }

  const handleDescChange = event => {
    setTaskDesc(event.target.value)
  }

  const addTask = event => {
    event.preventDefault()
    const taskObject = {
      taskname: newTaskName,
      taskdescription: newTaskDesc,
      list: listId
    }

    console.log(taskObject)
    taskService
      .create(taskObject)
      .then(returnedTask => {
        setTaskName('')
        setTaskDesc('')
      })
  }

  return (
    <Card>
      <form onSubmit={addTask}>
        <Input
          value={newTaskName}
          onChange={handleNameChange}
          name='taskName'
          placeholder='Enter task name'
        />
        <Input
          value={newTaskDesc}
          onChange={handleDescChange}
          name='taskDescription'
          placeholder='Add description'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Card>
  )
}

export default AddTask
