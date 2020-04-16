export function listFriendsRequest() {
  return {
    type: '@friend/LIST_FRIENDS_REQUEST',
  };
}

export function listFriendsSuccess(data) {
  return {
    type: '@friend/LIST_FRIENDS_SUCCESS',
    payload: data,
  };
}

export function addFriendRequest({ email }) {
  return {
    type: '@friend/ADD_FRIEND_REQUEST',
    payload: { email },
  };
}

export function addFriendSuccess(profile) {
  return {
    type: '@friend/ADD_FRIEND_SUCCESS',
    payload: profile,
  };
}

export function startChat(profile) {
  return {
    type: '@friend/START_CHAT',
    payload: profile,
  };
}

export function endChat() {
  return {
    type: '@friend/END_CHAT',
  };
}
