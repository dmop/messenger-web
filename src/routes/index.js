import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

import ChatList from '~/pages/ChatList';
import Profile from '~/pages/Profile';
import FriendsList from '~/pages/FriendsList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />

      <Route path="/chats" component={ChatList} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/friends" component={FriendsList} isPrivate />
    </Switch>
  );
}
