import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  addFriendRequest,
  listFriendsRequest,
} from '~/store/modules/friend/actions';
import FriendItem from '~/components/FriendItem';

export default function FriendList() {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friend.friends);

  useEffect(() => {
    dispatch(listFriendsRequest());
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('Campo obrigatório'),
    }),
    onSubmit: ({ email }) => {
      dispatch(addFriendRequest({ email }));
    },
  });

  return (
    <div className="sidebar">
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container-fluid py-6">
            <h2 className="font-bold mb-6">Amigos</h2>
            <form className="mb-6" onSubmit={formik.handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Procurar por email..."
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-lg btn-ico btn-secondary btn-minimal"
                    type="submit"
                  >
                    <i className="fe-search" />
                  </button>
                </div>
              </div>
            </form>

            {friends && (
              <nav className="mb-n6">
                {friends.map(profile => (
                  <FriendItem key={profile.id} profile={profile} />
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
