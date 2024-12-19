import React from 'react' 
import StartGame from './StartGame'
import Sidebar from './Sidebar'
const FirstPage = () => {
  return (
    <div className='first-name'>
        <Sidebar />
        <StartGame />
    </div>
  )
}

export default FirstPage