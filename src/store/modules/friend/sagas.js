import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { addFriendSuccess, listFriendsSuccess } from './actions';

export function* addFriend({ payload }) {
  try {
    const { email } = payload;

    const response = yield call(api.post, 'friends', { email });

    toast.success('Amigo adicionado com sucesso!');

    yield put(addFriendSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao adicionar amigo, confira seus dados!');
  }
}

export function* listFriends() {
  try {
    const response = yield call(api.get, 'friends');

    yield put(listFriendsSuccess(response.data.friends));
  } catch (error) {
    toast.error('Erro ao listar amigos!');
  }
}

export default all([
  takeLatest('@friend/ADD_FRIEND_REQUEST', addFriend),
  takeLatest('@friend/LIST_FRIENDS_REQUEST', listFriends),
]);
