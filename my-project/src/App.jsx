import { useState } from 'react'
import Input from './input'
//email
//number
//text 
//checkbox
//radio
//date
//date and time
//time
//file 
//password
//search
//tel
//url
//submit

function App() {
  const [email,setEmail] = useState("")
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
<Input placeholder={"Enter email"} value={email} onChange={setEmail}/>
<Input type="number" placeholder={"Enter number"}  value={20}/>

    </div>
  )
}

export default App
