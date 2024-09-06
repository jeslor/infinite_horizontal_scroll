import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="h-screen w-full pt-8">
          <h1 className="text-5xl text-center text-gray-900 font-extrabold">
            A  react horizontal scroll component
          </h1>
          <p>
            This is a simple React application that implements infinite horizontal card scrolling ♾️. When the user hovers over the component, the scrolling pauses offering a seamless and efficient browsing experience 🎨.
          </p>
      </section>
    </>
  )
}

export default App
