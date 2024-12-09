import React from "react";
import "./App.css";

export default function Landing() {
  return (
    <div className="Landing" id="home">
      <div className="greeting">Welcome</div>
      <div className="greeting-2">Traveller...</div>
      <div className="greeting-3">I'm Gesa-Maria Gercke</div>
      <div className="animation">
        <div className="first">
          <div>Web Developer</div>
        </div>
        <div className="second">
          <div>Creative Mind</div>
        </div>
        <div className="third">
          <div>Problem Solver</div>
        </div>
      </div>
      <div className="descript">
        Combining scientific approaches with a wealth of{" "}
        <span className="creative">
          <span className="fancy-2">creative ideas</span>
        </span>
        , I absolutely love to learn new things and work in an
        application-oriented manner. My strengths include responsive web design,
        a passion for accessibility, and playing with{" "}
        <span className="fancy">shapes and colors</span>. I'm adept at teamwork
        and client collaboration, leveraging my strong{" "}
        <span className="jumpy">
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>m</span>
          <span>u</span>
          <span>n</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
        </span>{" "}
        and problem-solving skills to deliver impactful solutions.
      </div>
    </div>
  );
}
