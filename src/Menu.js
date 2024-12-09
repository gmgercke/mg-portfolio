import React from "react";
import "./App.css";
import { Menubar } from "primereact/menubar";
import logo from "./sidebarcat.png";

export default function Menu() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "#home",
    },
    {
      label: "About Me",
      icon: "pi pi-face-smile",
      url: "#about",
    },
    {
      label: "Projects",
      icon: "pi pi-github",
      url: "#projects",
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      url: "#contact",
    },
  ];

  const start = (
    <img alt="logo" src={logo} height="40" className="mx-2 logo"></img>
  );

  return (
    <div className="Menu sticky top-0 z-5">
      <Menubar model={items} start={start} />
    </div>
  );
}
