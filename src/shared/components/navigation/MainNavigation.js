import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDraver";
import "./MainNavigation.css";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = props => {
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__menu-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
    
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">L.W.I.F.</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
