import React from "react";
import { themes } from "../redux/Thema";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleThemaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedThema = e.target.value;
    dispatch(themes(selectedThema));
  };

  return (
    <div className="navbar bg-base-100 shadow-xl sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
        </div>
        <div>
          <div className="navbar-start hidden lg:flex text-orange-400">
            <ul className="menu menu-horizontal px-1 text-orange-400">
              <li className="text-orange-400">
                <Link to="/">Home</Link>
              </li>
              <li className="text-orange-400">
                <Link to="/Favorit">Favorit</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-start hidden lg:flex text-orange-400">
        <a className="font-bold underline text-6xl text-center text-orange-400">YUYUNA FILM</a>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <div className="input-group">
            <select className="select  w-full max-w-xs text-orange-400" onChange={handleThemaChange}>
              <option disabled selected>
                Dark/Light
              </option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
