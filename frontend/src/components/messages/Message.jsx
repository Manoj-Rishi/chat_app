import React from 'react';

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                    alt='Chat bubble component'
                    src={
                        "https://avatar.iran.liara.run/public/39"
                    }
                />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}> Hi! What's up?</div>
        <div className='chat-footer opacity-60 text-xs flex gap-1 items-center'>3:00</div>
    </div>
  );
};

export default Message;

// STARTER CODE
// import React from 'react';
// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img 
//                     alt='Chat bubble component'
//                     src={
//                         "https://avatar.iran.liara.run/public/39"
//                     }
//                 />
//             </div>
//         </div>
//         <div className={'chat-bubble text-white bg-blue-500'}> Hi! What's up?</div>
//         <div className='chat-footer opacity-60 text-xs flex gap-1 items-center'>3:00</div>
//     </div>
//   );
// };

// export default Message;