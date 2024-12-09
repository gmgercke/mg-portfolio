import React from "react";
import "./App.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/soho-light/theme.css";
import "/node_modules/primeflex/primeflex.css";
import Menu from "./Menu.js";
import Landing from "./Landing.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import sidebarcat from "./sidebarcat.png";

export default function App() {
  return (
    <PrimeReactProvider>
      <div className="App curve">
        <section>
          <Menu />
          <Landing />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </section>
        <div className="stickyjoke">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={sidebarcat}
              alt="impish Cat icon in sidebar"
              className="sidebarimg"
            ></img>
          </a>
        </div>
      </div>
    </PrimeReactProvider>
  );
}
