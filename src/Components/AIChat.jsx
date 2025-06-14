import React from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CopyButton from './CopyButton';


const AIChat = ({ChatData}) => {
         const isHtml = ChatData.message.trim().startsWith('<');
  return (
<div className="self-start chat-message relative bg-[#24114D] p-3 rounded-tr-3xl rounded-bl-3xl  w-[98%] md:w-[80%]">
  <span className='absolute right-4 -top-2 '>
    <CopyButton ContentForCopy={ChatData.message}/>
  </span>
      {isHtml ? (
        <div dangerouslySetInnerHTML={{ __html: ChatData.message }} />
      ) : (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {ChatData.message}
        </ReactMarkdown>
      )}

      <span className="text-[10px] absolute right-4 -bottom-1">
        {new Date(ChatData.time).toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })}
      </span>
     
    </div>
  )
}

export default AIChat