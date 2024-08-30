import { useEffect, useState } from 'react'
import './App.css'
// import { Button } from './components/ui/button'
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus luctus justo, sed ullamcorper ante placerat a. Etiam posuere venenatis lacus non tempor. Praesent ullamcorper ex eget metus tincidunt dapibus. Etiam tempus vehicula consectetur. Aenean et quam velit. Vivamus erat neque, pulvinar a metus quis, cursus pretium ex. Fusce cursus.F";
function App() {
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    document.body.addEventListener("keypress", e=>{
      console.log(e)
      if(e.key===str[index]){
        console.log("green", index)
      } else {
        console.log("red", index)
      }
      setIndex(index=>index+1)
    })
  },[])
  return (
    <>
      <div className='flex justify-between p-2'>
        <h1 className='text-2xl font-mono'>typebattle</h1>
      </div>
      
      <main className='my-4 p-4 '>
        <div className='text-xl text-gray-600'>
          {str}
        </div>
      </main>
    </>
  )
}

export default App
