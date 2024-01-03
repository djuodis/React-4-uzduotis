import './App.css'
import Header from './components/Header'
import Input from './components/Input' // Import the Input component
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './components/Button'
import List from './components/List'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [memoryList, setMemoryList] = useState([])

  useEffect(() => {
    const storedList = localStorage.getItem('memory-list')
    if (storedList) {
      setMemoryList(storedList.split(','))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('memory-list', memoryList)
  }, [memoryList])

  const handleAddClick = () => {
    if (!inputValue) {
      alert('Laukelis tuščias')
      return
    }

    const newList = [...memoryList, inputValue]
    setMemoryList(newList)
    setInputValue('')
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue) {
      const newList = [...memoryList, inputValue]
      setMemoryList(newList)
      setInputValue('')
    }
  }

  const removeFromList = (index) => {
    const newList = memoryList.filter((_, i) => i !== index)
    setMemoryList(newList)
  }

  return (
    <>
      <Header />

      <div className="input-container">
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyPress={handleKeyPress}
        />
        <Button handleAddClick={handleAddClick} />
        <List memoryList={memoryList} removeFromList={removeFromList} />
      </div>
    </>
  )
}

export default App
