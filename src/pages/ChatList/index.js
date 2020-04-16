import React from 'react';

import Avatar11 from '~/assets/images/avatars/1.jpg';

export default function ChartList() {
  return (
    <div className="sidebar">
      <div
        className="tab-pane fade h-100 show active"
        id="tab-content-dialogs"
        role="tabpanel"
      >
        <div className="d-flex flex-column h-100">
          <div className="hide-scrollbar">
            <div className="container-fluid py-6">
              <h2 className="font-bold mb-6">Conversas</h2>
              <form className="mb-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Procurar por mensagens ou usuários..."
                    aria-label="Procurar por mensagens ou usuários..."
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
              <nav className="nav d-block list-discussions-js mb-n6">
                <a className="text-reset nav-link p-0 mb-6" href="chat-1.html">
                  <div className="card card-active-listener">
                    <div className="card-body">
                      <div className="media">
                        <div className="avatar mr-5">
                          <img
                            className="avatar-img"
                            src={Avatar11}
                            alt="Bootstrap Themes"
                          />
                        </div>
                        <div className="media-body overflow-hidden">
                          <div className="d-flex align-items-center mb-1">
                            <h6 className="text-truncate mb-0 mr-auto">
                              Bootstrap Themes
                            </h6>
                            <p className="small text-muted text-nowrap ml-4">
                              10:42 am
                            </p>
                          </div>
                          <div className="text-truncate">
                            Anna Bridges: Hey, Maher! How are you? The weather
                            is great isn't it?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="badge badge-circle badge-primary badge-border-light badge-top-right">
                      <span>3</span>
                    </div>
                  </div>
                </a>
                <a className="text-reset nav-link p-0 mb-6" href="chat-2.html">
                  <div className="card card-active-listener">
                    <div className="card-body">
                      <div className="media">
                        <div className="avatar avatar-online mr-5">
                          <img
                            className="avatar-img"
                            src={Avatar11}
                            alt="Anna Bridges"
                          />
                        </div>
                        <div className="media-body overflow-hidden">
                          <div className="d-flex align-items-center mb-1">
                            <h6 className="text-truncate mb-0 mr-auto">
                              Anna Bridges
                            </h6>
                            <p className="small text-muted text-nowrap ml-4">
                              10:42 am
                            </p>
                          </div>
                          <div className="text-truncate">
                            is typing
                            <span className="typing-dots">
                              <span>.</span>
                              <span>.</span>
                              <span>.</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
