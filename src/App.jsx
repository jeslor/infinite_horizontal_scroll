import { useState } from 'react'
import {users} from "../constants/users"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="h-screen w-full pt-8 bg-gradient-to-t to-slate-900 from-black fixed overflow-y-scroll">
          <h1 className="text-5xl text-center text-primary1 font-extrabold">
            A  react horizontal scroll component
          </h1>
          <p className="py-7 max-w-[1000px] w-full  mx-auto text-slate-500 text-center text-lg font-medium">
            This is a simple React application that implements infinite horizontal card scrolling ♾️. When the user hovers over the component, the scrolling pauses offering a seamless and efficient browsing experience 🎨.
          </p>
          <div className="grid grid-cols-auto-fill-400 gap-y-3">
            {users.map((user, index) => (
              <div key={index} className="flex items-center justify-center bg-slate-800 mx-2 rounded-xl">
                <div className="flex flex-col items-center justify-center p-4rounded-lg m-4">
                  <img src={user.image_url} alt={user.username} className="w-10 h-10 rounded-full" />
                  <h2 className="text-xl text-slate-100 font-semibold mt-4">{`${user.first_name} ${user.last_name}`}</h2>
                  <p className="text-base text-slate-500 font-normal mt-2">{user.comment}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  )
}

export default App
