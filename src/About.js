import React from "react";
import "./App.css";
import avatar from "./placeholder.png";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="grid flex flex-wrap justify-content-center">
        <div className="md:col-6 lg:col-6 hidden md:block align-content-center">
          <img src={avatar} alt="placeholder" className="avatar"></img>
        </div>
        <div className="col">
          <p className="aboutme-head">About Me</p>
          <p className="aboutme">
            I'm a <span className="aboutme-str">Web Developer</span> and
            Software Engineer living on the Baltic Coast in northern Germany.
            <br></br>My tools of choice are HTML, CSS and Javascript/JSX,
            especially <span className="aboutme-str">React</span>.<br></br>To
            boost my Backend skills, i'm also actively learning object oriented
            programming in
            <span className="aboutme-str"> Python and Java</span>.<br></br>I
            pride myself on my{" "}
            <span className="aboutme-str">team oriented</span> communication and
            I'm always ready to absorb new knowledge.
          </p>
          <p className="aboutme-head">Skills</p>
          <p className="aboutme">
            In the following segment I evaluate the level of my skills using the
            5-Stage-Model proposed by:<br></br>
            <span className="font-italic">
              Dreyfus, H. L., & Dreyfus, S. E. (1986). Mind over machine: The
              power of human intuition and expertise in the era of the computer.
              New York: The Free Press.
            </span>
            <br></br>
            The five stages of expertise are novice, advanced beginner,
            competent, proficient, and expert.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 justify-center m-0">
            <div className="flex flex-column">
              <p className="aboutme">
                <span className="aboutme-str">HTML 5, CSS 3, React 18</span>
                <br></br>
                <span className="aboutme-str">Python 3 </span>
                <br></br>
                <span className="aboutme-str">Java 21</span>
              </p>
            </div>
            <div className="flex flex-column ">
              <p className="aboutme">
                <span className="aboutme">Compotent</span>
                <br></br>
                <span className="aboutme">Advanced Beginner</span>
                <br></br>
                <span className="aboutme">Novice</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
