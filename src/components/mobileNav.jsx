import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function mobileNav() {
  return (
    <div className="navbar">
      <a href="/">Logo</a>
      <Menu className="menu">
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/EmailForm">Contact</a>
        <a className="menu-item" href="/gallery">Gallery</a>
      </Menu>
    </div>
  );
}
