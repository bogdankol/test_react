import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import {useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';

function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <div className={s.navDiv}>
        {isLoggedIn ?  <>
        <NavLink to="/listOfMovies" className={({ isActive }) => (isActive ? s.activeLink : s.link)}>
        movies list
      </NavLink>
      <NavLink to="/specify" className={({ isActive }) => (isActive ? s.activeLink : s.link)} >
        do special search
      </NavLink>
      <NavLink to="/addMovie" className={({ isActive }) => (isActive ? s.activeLink : s.link)} >
        add a movie
      </NavLink>
      </> : 
      <NavLink to="/home" className={({ isActive }) => (isActive ? s.activeLink : s.link)} >
      home
    </NavLink>
      }
     
    </div>
  );
}

export default Navigation;
