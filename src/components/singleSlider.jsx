import React, { useEffect, useState } from 'react'

const SingleSlider = ({users}) => {
    const [slider1AnimationStyles, setSlider1AnimationStyles] = useState({});
    const [slider1, setSlider1] = useState([]);
    const [slider2, setSlider2] = useState([]);

    useEffect(() => {

      setSlider1(users.slice(0, users.length / 2))
      setSlider2(users.slice(users.length / 2, users.length))

      setSlider1AnimationStyles({
            animationDuration: `220s`,
            animationTimingFunction: `linear`,
            animationDelay: `0s`,
        })
    }, [])
    


    
  return (
    <div className="flex flex-1 gap-y-3 pt-[4rem] w-fit">
    <div style={slider1AnimationStyles}  className="flex h-fit animate-[horizontalScroll] ">
    {slider1.map((user, index) => (
        <div key={index} className=" items-center bg-slate-800 mx-2 rounded-xl">
          <div className="flex flex-col items-start justify-start p-4rounded-lg m-4 w-[400px]">
            <div className='flex flex-col'>
            <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt={user.username} className="w-10 h-10 rounded-full" />
            <small className="text-slate-600">{user.username}</small>
            </div>
            <h2 className="text-xl text-slate-100 font-semibold mt-4">{`${user.first_name} ${user.last_name}`}</h2>
            <p className="text-base text-slate-400 font-normal mt-2">{user.comment}</p>
          </div>
        </div>
      ))}
    </div>
   <div className="flex h-fit">
   {slider2.map((user, index) => (
      <div key={index} className=" items-center bg-slate-800 mx-2 rounded-xl">
        <div className="flex flex-col items-start justify-start p-4rounded-lg m-4 w-[400px]">
          <div className='flex flex-col'>
          <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" alt={user.username} className="w-10 h-10 rounded-full" />
          <small className="text-slate-600">{user.username}</small>
          </div>
          <h2 className="text-xl text-slate-100 font-semibold mt-4">{`${user.first_name} ${user.last_name}`}</h2>
          <p className="text-base text-slate-400 font-normal mt-2">{user.comment}</p>
        </div>
      </div>
    ))}
   </div>
  </div>
  )
}

export default SingleSlider