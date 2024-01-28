import React from "react";

function Header() {
  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>Meram Belediyesi</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Meram Belediyesi</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-8 col-sm-8 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          Ana Sayfa
                        </a>
                      </li>
                      <li>
                        <a href="/#misyon">Misyon</a>
                      </li>
                      <li>
                        <a href="/#baskan">Başkan</a>
                      </li>
                      <li>
                        <a href="/#eskiBaskan">Eski Başkanlar</a>
                      </li>
                     
                      <li>
                        <a href="/#blog">Etkinlikler</a>
                      </li>
                      <li>
                        <a href="/#contact">İletişim</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
