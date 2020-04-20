import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { endChat } from '~/store/modules/friend/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSignOut = () => {
    dispatch(endChat());
    dispatch(signOut());
  };

  return (
    <div className="sidebar">
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container-fluid py-6">
            <h2 className="font-bold mb-6">Perfil</h2>
            <div className="card mb-6">
              <div className="card-body">
                <div className="text-center py-6">
                  <div className="avatar avatar-xl mb-5">
                    <img
                      className="avatar-img"
                      src="https://api.adorable.io/avatars/285/abott@adorable.png"
                      alt={profile.name}
                    />
                  </div>
                  <h5>{profile.name}</h5>
                </div>
              </div>
            </div>
            <div className="card mb-6">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 py-6">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">País</p>
                        <p>Brasil</p>
                      </div>
                      <i className="text-muted icon-sm fe-globe" />
                    </div>
                  </li>

                  <li className="list-group-item px-0 py-6">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Telefone</p>
                        <p>+39 02 87 21 43 19</p>
                      </div>
                      <i className="text-muted icon-sm fe-mic" />
                    </div>
                  </li>

                  <li className="list-group-item px-0 py-6">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Email</p>
                        <p>{profile.email}</p>
                      </div>
                      <i className="text-muted icon-sm fe-mail" />
                    </div>
                  </li>

                  <li className="list-group-item px-0 py-6">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="small text-muted mb-0">Hora</p>
                        <p>10:03 am</p>
                      </div>
                      <i className="text-muted icon-sm fe-clock" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-lg btn-block btn-basic d-flex align-items-center"
                  onClick={handleSignOut}
                >
                  Sair
                  <span className="fe-log-out ml-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
