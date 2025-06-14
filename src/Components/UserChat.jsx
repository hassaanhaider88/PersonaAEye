import React from 'react'

const UserChat = ({ChatData}) => {
  return (
    <div className="relative self-end rounded-br-4xl px-2 rounded-tl-4xl bg-gray-700 p-3 w-[95%] md:w-[50%]">
      {ChatData.message}
      <span className='text-[10px] absolute right-4 bottom-1'>{new Date(ChatData.time).toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })}</span>
    </div>
  )
}

export default UserChat