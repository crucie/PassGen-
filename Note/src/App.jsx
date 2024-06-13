import { useState } from 'react'
import './App.css'
import NavLeft from './Components/navBar/NavLeft'
import NoteList from './Components/NotesList/NoteList'

function App() {
  
  return (
    <>
    <div className='flex flex-row'>
      <div>
        <NavLeft/>
      </div>

      <div className='flex flex-col font-jura w-screen ml-10 '>
        <div className='text-white text-[48px] p-2 mt-5'>
          scriptIt!
        </div>
        <div className="border-t border-white mb-2 w-[100%] left-[5%]"></div>
        <NoteList/>

      </div>
    </div>
    </>
  )
}

export default App
