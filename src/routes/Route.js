import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SocketIo from 'socket.io-client';

import { store } from '~/store';

import Navbar from '~/pages/Navbar';
import Chat from '~/pages/Chat';

let socket;

function AuthLayout({ children }) {
  return <>{children}</>;
}

function DefaultLayout({ children }) {
  const currentChatFriend = useSelector(
    state => state.friend.current_chat_friend
  );

  return (
    <Navbar>
      {children}
      {currentChatFriend && (
        <Chat socket={socket} currentChatFriend={currentChatFriend} />
      )}
    </Navbar>
  );
}

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !socket) {
    socket = SocketIo('http://api.danilopedrosa.com/');
  }

  if (signed && !isPrivate) {
    return <Redirect to="/friends" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
