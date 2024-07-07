import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // use ref hooks
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(function(){
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setpassword(pass)
  }, [length, numAllowed, charAllowed, setpassword])

  const copyPasswordToClipbord = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, setpassword, passwordGenerator])

  return (
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 mt-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input className='outline-none w-full py-1 px-3' type="text" value={password} placeholder="password" readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipbord} className='btn hover:bg-blue-600 active:bg-blue-800 focus:outline-none focus:ring focus:ring-violet-300 outline-none bg-blue-700 text-white px-3 py-1 shrink-0 ease-in duration-300 scale-75'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1' >
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setlength(e.target.value)}}/>
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numAllowed} id="numberInput" onChange={() => {setnumAllowed((prev) => !prev)}}  />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numAllowed} id="charInput" onChange={() => {setcharAllowed((prev) => !prev)}}  />
            <label>character</label>
          </div>

        </div>
      </div>
  )
}

export default App
