import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // useCallback is a React Hook that lets you cache a function definition between re-renders,
  // useCallback(function jisko baar baar execute hona hai,[dependencies jisko use krne par function fir se execute hoye])
  //yha par dependencies wo hai jinke basis par function executes and PASSWORD change hoga

  const passwordGenerator = useCallback(() => {
    let pass = ""  //phle to empty hai , fir jo pass generate hoga usko hum Line9 se setpassword se password me bhj denge

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*(){}[]_-=`~"
    }
    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) //Random Number Generator

      pass = str.charAt(char) //jo random nuumber hai uski ke similar ASCII se str me alphabet choose kr rhe

    }


  }, [length, numberAllowed, characterAllowed, setpassword])

  return (
    <>
      <h1 className='text-6xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
