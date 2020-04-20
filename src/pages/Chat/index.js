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

  // let peerConnection;
  // const { peerConnection, RTCSessionDescription } = window;
  let room = `${userProfile.id}_${currentChatFriend.id}`;

  if (userProfile.id > currentChatFriend.id) {
    room = `${currentChatFriend.id}_${userProfile.id}`;
  }

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
        room,
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
    // async function getUserVideo() {
    //   try {
    //     const stream = await navigator.mediaDevices.getUserMedia({
    //       video: true,
    //       audio: true,
    //     });

    //     const localVideo = document.getElementById('local-video');

    //     if (localVideo) {
    //       localVideo.srcObject = stream;
    //     }

    //     stream.getTracks().forEach(track => {
    //       console.log(track);
    //       peerConnection.addTrack(track, stream);
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // async function callUser() {
    //   try {
    //     peerConnection = new RTCPeerConnection();
    //     const offer = await peerConnection.createOffer();
    //     await peerConnection.setLocalDescription(
    //       new RTCSessionDescription(offer)
    //     );

    //     socket.emit('CALL_USER', {
    //       offer,
    //       room,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // if (peerConnection) {
    //   peerConnection.ontrack = ({ streams: [stream] }) => {
    //     console.log('aqui');
    //     const remoteVideo = document.getElementById('remote-video');
    //     if (remoteVideo) {
    //       remoteVideo.srcObject = stream;
    //     }
    //   };
    // }
    socket.on('LIST_MESSAGES', ({ room, messages }) => {
      setMessages([...messages]);
      scrollToBottom();
      focusInput();
    });

    // socket.on('CALL_MADE', async data => {
    //   await peerConnection.setRemoteDescription(
    //     new RTCSessionDescription(data.offer)
    //   );
    //   const answer = await peerConnection.createAnswer();
    //   await peerConnection.setLocalDescription(
    //     new RTCSessionDescription(answer)
    //   );

    //   socket.emit('MAKE_ANSWER', {
    //     answer,
    //     room,
    //     user_id: userProfile.id,
    //     friend_id: currentChatFriend.id,
    //   });
    // });

    // socket.on('ANSWER_MADE', async data => {
    //   await peerConnection.setRemoteDescription(
    //     new RTCSessionDescription(data.answer)
    //   );

    //   callUser();
    // });

    // return () => {
      // console.log('leaving room');
      // socket.emit('leave room', {
      //   room: 'test-room',
      // });
    // };
    // getUserVideo();
    // callUser();
  }, []);

  useEffect(() => {
    socket.emit('CREATE_CHAT', {
      room,
      user_id: userProfile.id,
      friend_id: currentChatFriend.id,
    });
  }, [room]);

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
                <div className="col-6 col-xl-6 text-right">
                  <div className="nav justify-content-end">
                    <ul className="nav justify-content-end">
                      <li className="nav-item list-inline-item d-none d-xl-block mr-3">
                        <div
                          className="nav-link text-muted px-3"
                          data-toggle="collapse"
                          data-target="#chat-2-search"
                          title="Search this chat"
                        >
                          <i className="icon-md fe-video" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row video-container">
            <div className="col-md-6">
              <video autoPlay muted className="local-video" id="local-video" />
            </div>
            <div className="col-md-6">
              <video autoPlay className="remote-video" id="remote-video" />
            </div>
          </div> */}
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
