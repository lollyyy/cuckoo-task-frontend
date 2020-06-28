import React, { useState, useEffect } from 'react'
import List from './components/List'
import AddList from './components/AddList'
import openSocket from 'socket.io-client'
const socket = openSocket('/')

const App = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    socket.on('lists', (newLists) => {
      setLists(newLists)
    })
    socket.emit('getLists', 2000)
  })

  return (
    <div>
      <AddList socket={socket} lists={lists} setLists={setLists}/>
      <h1>hello</h1>
      {lists.length > 0 && lists.map(list => <List
        key={list.id}
        title={list.listname}
        tasks={list.tasks}
        listId={list.id}
        color={list.color}/>)}
    </div>
  )
}

export default App
