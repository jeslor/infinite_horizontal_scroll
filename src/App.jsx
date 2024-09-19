import { useEffect, useState } from 'react'
import {users} from "../constants/users"
import './App.css'
import SingleSlider from './components/singleSlider'

function App() {
  const [loadedUsers, setLoadedUsers] = useState(users)


  useEffect(() => {
   let newUsers = []
   loadedUsers.forEach((user, index) => {
    user.image_url = `https://xsgames.co/randomusers/avatar.php?g=pixel`
    newUsers.push(user)
  })
  setLoadedUsers(
    newUsers
  )
    
  }, [])
  


  return (
    <>
      <section className="h-screen w-full pt-8 bg-gradient-to-t to-slate-900 from-black fixed overflow-y-scroll overflow-x-hidden">
          <h1 className="text-5xl text-center text-primary1 font-extrabold">
            A  react horizontal scroll component
          </h1>
          <p className="py-7 max-w-[1000px] w-full  mx-auto text-slate-500 text-center text-lg font-medium">
            This is a simple React application that implements infinite horizontal card scrolling ♾️. When the user hovers over the component, the scrolling pauses offering a seamless and efficient browsing experience 🎨.
          </p>
          <div className='flex justify-center'>
            <button className='px-8 py-3 bg-slate-300 mx-2 rounded-s-xl font-semibold text-slate-900 hover:bg-slate-400 transition-all'>Left</button>
            <button className='px-8 py-3 bg-slate-300 mx-2 rounded-e-xl font-semibold text-slate-900 hover:bg-slate-400 transition-all'>right</button>
          </div>
         <div className="pt-10">
          <SingleSlider users={users.slice(0,10)} direction="left" />
          <SingleSlider users={users.slice(10,20)}  direction="right" />
         </div>
      </section>
    </>
  )
}

export default App
