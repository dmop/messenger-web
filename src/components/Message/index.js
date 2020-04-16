import React from 'react';

export default function Message({ message }) {
  return (
    <div className={`message ${message.from_user ? 'message-right' : ''}`}>
      <div
        className={`${
          message.from_user
            ? 'avatar avatar-sm ml-4 ml-lg-5  d-none d-lg-block'
            : 'avatar avatar-sm mr-4 mr-lg-5'
        }`}
      >
        <img
          className="avatar-img"
          src="https://api.adorable.io/avatars/50/abott@adorable.png"
          alt=""
        />
      </div>

      <div className="message-body">
        <div className="message-row">
          <div
            className={`d-flex align-items-center ${
              message.from_user ? 'justify-content-end' : ''
            }`}
          >
            <div
              className={`message-content ${
                message.from_user ? 'bg-primary text-white' : 'bg-light'
              }`}
            >
              <div>{message.message}</div>
              {/* <div className="mt-1">
                <small className="opacity-65">{message.createdAt}</small>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  {/* <div className="message">
//     <a
//       className="avatar avatar-sm mr-4 mr-lg-5"
//       href="chat-1.html#"
//       data-chat-sidebar-toggle="#chat-1-user-profile"
//     >
//       <img
//         className="avatar-img"
//         src="https://api.adorable.io/avatars/50/abott@adorable.png"
//         alt=""
//       />
//     </a>

//     <div className="message-body">
//       <div className="message-row">
//         <div className="d-flex align-items-center">
//           <div className="message-content bg-light">
//             <div>
//               William is typing
//               <span className="typing-dots">
//                 <span>.</span>
//                 <span>.</span>
//                 <span>.</span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
