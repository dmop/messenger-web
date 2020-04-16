import React from 'react';
import { useDispatch } from 'react-redux';

import { startChat } from '~/store/modules/friend/actions';

export default function FriendItem({ profile }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startChat(profile));
  };

  return (
    <div className="card mb-6" onClick={() => handleClick()}>
      <div className="card-body">
        <div className="media">
          <div className="avatar avatar-online mr-5">
            <img
              className="avatar-img"
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt={profile.name}
            />
          </div>
          <div className="media-body align-self-center">
            <h6 className="mb-0">{profile.name}</h6>
            <small className="text-muted">Online</small>
          </div>
        </div>
      </div>
    </div>
  );
}
