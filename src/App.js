import React, { useState, useEffect } from 'react'
import { Card, Button } from '@material-ui/core'
import List from './components/List'
import AddList from './components/AddList'
import listService from './services/listService'
import { subscribeToTimer, getLists } from './services/socket-api'


const App = () => {
  const [lists, setLists] = useState([])
  
  getLists((err, returnedLists) => { 
    setInterval(() => {  
    setLists(returnedLists)
      console.log(returnedLists)
    }, 500)
    })

subscribeToTimer((err, timer) => {
  console.log(timer)
})

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
