import React, { useState, useEffect } from 'react'
import { Card, Button } from '@material-ui/core'
import List from './components/List'
import AddList from './components/AddList'
import listService from './services/listService'

const Notification = ({ message }) => {
  return (
    message === null
      ? null
      : <Card><p>{message}</p></Card>
  )
}

const App = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    listService
      .getAll()
      .then(initialLists => {
        setLists(initialLists)
      })
  }, [])

  return (
    <div>
      <AddList/>
      <h1>hello</h1>
      {lists.map(list => <List
        key={list.id}
        title={list.listname}
        tasks={list.tasks}
        listId={list.id}
        color={list.color}/>)}
    </div>
  )
}

export default App
