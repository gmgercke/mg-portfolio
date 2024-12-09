import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./App.css";
import weather from "./weather.png";
import trinkomat from "./Trinkomat.gif";
import adventure from "./SpielWebseite.gif";

export default function Projects() {
  const [tabs] = useState([
    {
      header: "Weather App (React, API)",
      children: (
        <div className="m-0">
          <div className="grid flex flex-wrap justify-content-center">
            <div className="md:col-6 lg:col-6 hidden md:block align-content-center">
              <img
                src={weather}
                alt="placeholder"
                className="xl:w-auto md:w-10"
              ></img>
            </div>
            <div className="col aboutme">
              This was one of my very first React projects. Its main feature is
              the use of the OpenWeather API and royalty free animated icons.
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Drink Vending Machine (Python, TKinter)",
      children: (
        <div className="m-0">
          <div className="grid flex flex-wrap justify-content-center">
            <div className="md:col-6 lg:col-6 hidden md:block align-content-center">
              <img
                src={trinkomat}
                alt="placeholder"
                className="xl:w-auto md:w-10"
              ></img>
            </div>
            <div className="col aboutme">
              While learning Python, i've been getting into TKinter, a library
              that provides GUI elements for Python.
              <br />
              Being able to work with Python is important to me as a science
              person to process data, but also to understand topics like machine
              learning better.
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Text Adventure (Java, OOP)",
      children: (
        <div className="m-0">
          <div className="grid flex flex-wrap justify-content-center">
            <div className="md:col-6 lg:col-6 hidden md:block align-content-center ">
              <img
                src={adventure}
                alt="placeholder"
                className="xl:w-full lg:w-10"
              ></img>
            </div>
            <div className="col aboutme">
              Getting into object oriented programming with Java was definitely
              a challenge! But learning Java or a similar language is essential
              when becoming a software engineer, and the results are quite
              rewarding. <br />
              I'm proud of the little game I was able to write, displaying not
              only OOP-Concepts at work, but also my creativitiy.
            </div>
          </div>
        </div>
      ),
    },
  ]);

  const createDynamicTabs = () => {
    return tabs.map((tab, i) => {
      return (
        <AccordionTab
          key={tab.header}
          header={tab.header}
          disabled={tab.disabled}
        >
          {tab.children}
        </AccordionTab>
      );
    });
  };

  return (
    <div className="Projects" id="projects">
      <div className="projects-head mb-4">Projects</div>
      <div className="card">
        <Accordion>{createDynamicTabs()}</Accordion>
      </div>
    </div>
  );
}
