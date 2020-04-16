import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Message from '~/components/Message';

export default function Chat({ socket, currentChatFriend }) {
  const userProfile = useSelector(state => state.user.profile);
  const [messages, setMessages] = useState(null);
  const messagesEndRef = useRef(null);
  const textInput = useRef(null);

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: ({ text }) => {
      socket.emit('SENDING_MESSAGE', {
        user_id: userProfile.id,
        friend_id: currentChatFriend.id,
        message: text,
      });

      formik.resetForm();
    },
  });

  const scrollToBottom = () => {
    if (messagesEndRef && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const focusInput = () => {
    if (textInput && textInput.current) {
      textInput.current.focus();
    }
  };

  useEffect(() => {
    socket.emit('CREATE_CHAT', {
      user_id: userProfile.id,
      friend_id: currentChatFriend.id,
    });

    socket.on('LIST_MESSAGES', payload => {
      setMessages([...payload.messages]);

      scrollToBottom();
      focusInput();
    });

    // return () => {
    // console.log('leaving room');
    // socket.emit('leave room', {
    //   room: 'test-room',
    // });
    // };
  }, []);

  return (
    <div className="main main-visible" data-mobile-height="">
      <div id="chat-1" className="chat dropzone-form-js" data-dz-url="some.php">
        <div className="chat-body">
          <div className="chat-header border-bottom py-4 py-lg-6 px-lg-8">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="col-3 d-xl-none">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="text-muted px-0"
                        href="chat-1.html#"
                        data-chat="open"
                      >
                        <i className="icon-md fe-chevron-left" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-xl-6">
                  <div className="media text-center text-xl-left">
                    <div className="avatar avatar-sm d-none d-xl-inline-block mr-5">
                      <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        className="avatar-img"
                        alt=""
                      />
                    </div>

                    <div className="media-body align-self-center text-truncate">
                      <h6 className="text-truncate mb-n1">
                        {currentChatFriend.name}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-content px-lg-8" onClick={() => focusInput()}>
            <div className="container-xxl py-6 py-lg-10">
              {messages &&
                messages.map(message => (
                  <Message key={message.id} message={message} />
                ))}
            </div>
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer border-top py-4 py-lg-6 px-lg-8">
            <div className="container-xxl">
              <form onSubmit={formik.handleSubmit} id="chat-id-1-form">
                <div className="form-row align-items-center">
                  <div className="col">
                    <div className="input-group">
                      <input
                        id="text"
                        type="text"
                        className="form-control bg-transparent border-0"
                        placeholder="Digite sua mensagem..."
                        ref={textInput}
                        onChange={formik.handleChange}
                        value={formik.values.text}
                      />
                    </div>
                  </div>

                  <div className="col-auto">
                    <button
                      className="btn btn-ico btn-primary rounded-circle"
                      type="submit"
                    >
                      <span className="fe-send" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
