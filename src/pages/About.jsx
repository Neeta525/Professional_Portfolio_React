import React from "react";
import Neeta from "../images/Neeta.jpg";
import "../styles/Pages.css";

function About() {
  return (
    <div className="container">
      <section className="section">
        <div className="col-md-12 text-center">
          <h1 className="main-heading">Anita Chavez</h1>
          <div className="underline mx-auto">
            <div className="container-md image-bio">
              <img
                src={Neeta}
                className="img"
                style={{ width: "25rem", height: "20rem" }}
                alt="Anita"
              />
              <h5 className="bio">
                Anita maintains a busy schedule. At work she is responsible for
                updating and maintaining the website. Any time there are
                audio/visual events, she is the project manager for these and
                she is also the videographer. On her free time she likes to
                visit new places and spend time with friends. She likes to bike
                around town or on the trails. One of her goals is to hike all
                the trails at Guadalupe Mountains National Park. At home, she is
                learning full stack web development and drinks a lot of tea
                while coding. ☕
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
