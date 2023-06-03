import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar w-screen shadow-md z-10 top-0 sticky w-100 bg-slate-300">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid bg-slate-400">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a className="nav-link active " aria-current="page" href="#">
                    My MOvies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Favorites
                  </a>
                </li>
              </ul>
              <span className="navbar-text">Dark mode:Off</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
