import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'


function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null)


  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed) str+= '0123456789'
    if (charAllowed) str+= '~`!@#$%^*&()-_=+{}[]?.:'

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)  
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPass = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()

  }, [length, numAllowed, charAllowed, passGenerator])
  
  
  return (
    <>
    <div className='box w-[100%] h-[30%] flex flex-col items-center rounded-lg justify-center m-5'>
      <div className='text-[38px] '>
        PassGen
      </div>
      <div className='flex flex-col bg-emerald-200 mb-4 p-4 rounded-lg overflow-hidden shadow  '>
          <div className='flex items-center justify-center m-3'>
            <input
              readOnly
              type='text'
              value={password}
              ref={passRef}
              className='outline-none text-lg w-full py-1 px-3'
              placeholder='Password'
            />
            <button
            onClick={copyPass} 
            className='w-[20%] h-[10%] bg-neutral-500 m-4 p-1 rounded-md shadow-sm '>
              COPY!
            </button>
          </div>
          <div className='text-sm flex gap-x-2'>
            <div className='flex items-center gap-x-1 text-gray-900'>
              <input 
              type='range'
              min = {6}
              max={100}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label> length: {length}</label>
            </div>
          
          <div className='text-sm text-gray-900 items center flex'>
            <input 
            type='checkbox'
            defaultChecked ={numAllowed} 
            id='numInput'
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>

          <div className='text-sm text-gray-900 items-center flex'>
            <input 
            type='checkbox' 
            defaultChecked = {charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label>Special Characters</label>
          </div>
          </div>
        </div>
    </div> 

    
    </>
  )
}

export default App
