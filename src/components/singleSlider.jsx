import React from 'react'

const SingleSlider = ({users}) => {
  return (
    <div className="flex flex-1 gap-y-3 pt-[4rem] animate-[horizontalScroll_100s_ease_infinite] w-fit">
    {users.map((user, index) => (
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
  )
}

export default SingleSlider