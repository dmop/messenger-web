import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ChatList from '~/pages/ChatList';
import Profile from '~/pages/Profile';

export default function Navbar({ children }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSignOut = () => {
    // dispatch(signOut());
  };

  return (
    <>
      <div className="layout">
        <div className="navigation navbar navbar-light justify-content-center py-xl-7">
          <ul
            className="nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center py-3 py-lg-0"
            role="tablist"
          >
            <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
              <a
                className="nav-link position-relative p-0 py-xl-3"
                data-toggle="tab"
                href="chat-1.html#tab-content-create-chat"
                title="Create chat"
                role="tab"
              >
                <i className="icon-lg fe-edit" />
              </a>
            </li>

            <li className="nav-item mt-xl-9">
              <Link
                to="/friends"
                className="nav-link position-relative p-0 py-xl-3"
                title="Friends"
              >
                <i className="icon-lg fe-users" />
              </Link>
            </li>

            <li className="nav-item mt-xl-9">
              <Link
                to="/chats"
                className="nav-link position-relative p-0 py-xl-3"
                title="Chats"
              >
                <i className="icon-lg fe-message-square" />
                {/* <div className="badge badge-dot badge-primary badge-bottom-center" /> */}
              </Link>
            </li>

            <li className="nav-item mt-xl-9 d-none d-xl-block flex-xl-grow-1">
              <Link
                to="/profile"
                className="nav-link position-relative p-0 py-xl-3"
                title="User"
              >
                <i className="icon-lg fe-user" />
              </Link>
            </li>

            <li className="nav-item mt-xl-9">
              <a
                className="nav-link position-relative p-0 py-xl-3"
                href="settings.html"
                title="Settings"
              >
                <i className="icon-lg fe-settings" />
              </a>
            </li>
          </ul>
        </div>

        {children}
      </div>
    </>
  );
}
