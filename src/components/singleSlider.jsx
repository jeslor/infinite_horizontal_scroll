import React, { useEffect, useState } from 'react'


const SingleSlider = ({users, direction}) => {
    const [slider1AnimationStyles, setSlider1AnimationStyles] = useState({});
    const [slider2AnimationStyles, setSlider2AnimationStyles] = useState({});
    const [slider1, setSlider1] = useState([]);
    const [slider2, setSlider2] = useState([]);
    const [animationDirection, setAnimationDirection] = useState(null)

    useEffect(() => {
      setAnimationDirection(direction)
      setSlider1(users.slice( users.length / 2))
      setSlider2(users.slice(users.length / 2, users.length))

      setSlider1AnimationStyles({
            animationDuration: `200s`,
            animationTimingFunction: `linear`,
            animationIterationCount: `infinite`,
        })
        setSlider2AnimationStyles({
            animationDuration: `200s`,
            animationTimingFunction: `linear`,
            animationIterationCount: `infinite`
        })
    }, [])
    


    
  return (
    <div style={{mask:"linear-gradient(90deg, transparent, white 10%, white 80%, transparent 98%)"}} className="flex flex-1 py-[2rem] w-[90vw] mx-auto">
    <div style={slider1AnimationStyles}  className={`flex h-fit ${animationDirection==='left'&&'animate-[horizontalScrollLeft] '} ${animationDirection==='right'&&'animate-[horizontalScrollRight]'} w-max flex-nowrap gap-4 `}>
    {slider1.map((user, index) => (
        <div key={index} className=" items-center bg-slate-800 rounded-xl  px-6 py-4">
          <div className="flex flex-col items-start justify-start p-4rounded-lg w-[400px]">
            <div className='flex flex-col'>
            <img src="/images/user.webp" alt={user.username} className="w-10 h-10 rounded-full opacity-40" />
            <small className="text-slate-600 font-bold">{user.username}</small>
            </div>
            <h2 className="text-xl text-slate-100 font-semibold mt-4">{`${user.first_name} ${user.last_name}`}</h2>
            <p className="text-sm text-slate-400 font-normal mt-2">{user.comment}</p>
          </div>
        </div>
      ))}
   {slider2.map((user, index) => (
      <div key={index} className=" bg-slate-800 rounded-xl  px-6 py-4">
        <div className="flex flex-col items- justify-start p-4rounded-lg w-[400px]">
          <div className='flex flex-col'>
          <img src="/images/user.webp" alt={user.username} className="w-10 h-10 rounded-full opacity-40" />
          <small className="text-slate-600 font-bold">{user.username}</small>
          </div>
          <h2 className="text-xl text-slate-100 font-semibold mt-2">{`${user.first_name} ${user.last_name}`}</h2>
          <p className="text-sm text-slate-400 font-normal mt-2">{user.comment}</p>
        </div>
      </div>
    ))}
   </div>
  </div>
  )
}

export default SingleSlider