import React, { useState } from 'react'
import listService from '../services/listService'
import { Card, Input, Button } from '@material-ui/core'

const AddList = ({lists, setLists}) => {
  const [newlistName, setlistName] = useState('')
  const [listColor, setlistColor] = useState('')

  const handleNameChange = event => {
    setlistName(event.target.value)
  }

  const handleColorChange = event => {
    setlistColor(event.target.value)
  }

  const addlist = event => {
    event.preventDefault()
    const listObject = {
      listname: newlistName,
      color: listColor
    }

    console.log(listObject)
    listService
      .create(listObject)
      .then(returnedlist => {
        setlistName('')
        setlistColor('')
        setLists(...lists, returnedlist)
      })
  }

  return (
    <Card>
      <h3>Add new list</h3>
      <form onSubmit={addlist}>
        <Input
          value={newlistName}
          onChange={handleNameChange}
          name='listName'
          placeholder='Enter list name'
        />
        <Input
          value={listColor}
          onChange={handleColorChange}
          name='listColor'
          placeholder='Add list color in  hexadecimal value'
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Card>
  )
}

export default AddList
