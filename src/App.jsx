import { useState, useCallback, useEffect } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")

  

  const passwordGenerator = useCallback(() => {
    let pass = ""  

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*(){}[]_-=`~"
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) 

      pass += str.charAt(char)

    }
    setpassword(pass)


  }, [length, numberAllowed, characterAllowed, setpassword] 
  )

   

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-[#8c4843] bg-[#c59849]'>

        <h1 className='text-[#221e22] text-center my-3 text-3xl'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-1'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />

          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={22}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            

            <label >Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev); 
              }} />

            <label htmlFor='numberInput'>Numbers</label>

          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed} 
              id="characterInput"
              onChange={() => {
                setcharacterAllowed((prev) => !prev); 
              }} />

            <label htmlFor='characterInput'>Characters</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
