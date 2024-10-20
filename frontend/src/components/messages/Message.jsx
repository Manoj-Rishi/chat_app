import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import userConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = userConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
    const shakeClass = message.shouldShake ? "shake": "";


  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                    alt='Chat bubble component'
                    src={profilePic}
                />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-60 text-xs flex gap-1 items-center'>
            {formattedTime}
        </div>
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