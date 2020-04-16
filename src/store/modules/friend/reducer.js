import produce from 'immer';

const INITIAL_STATE = {
  friends: [],
  current_chat_friend: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@friend/LIST_FRIENDS_SUCCESS': {
        draft.friends = action.payload;
        break;
      }
      case '@friend/ADD_FRIEND_SUCCESS': {
        draft.friends.push(action.payload);
        break;
      }
      case '@friend/START_CHAT': {
        draft.current_chat_friend = action.payload;
        break;
      }
      case '@friend/END_CHAT': {
        draft.current_chat_friend = null;
        break;
      }
      default:
    }
  });
}
