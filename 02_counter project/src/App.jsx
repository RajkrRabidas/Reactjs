import { useState } from 'react'

function App(){

  const [a, b] = useState(2)

  return (
    <>
      <div>
      <h1>{a}</h1>
    <button onClick={()=>b(a*2)} >onClick</button>
      </div>
    </>
  )
}

export default App




// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='w-full h-screen bg-zinc-900 text-white p-4'>
//           <h1>{count}</h1>
//           <button onClick={()=>setCount(count+1)} className='px-4 py-1 bg-green-500 rounded-md' >click</button>
//       </div>
//     </>
//   )
// }

// export default App
