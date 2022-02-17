import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>Every idea needs a Story.</h1>
      <div className="aboutDesc">
        <p>
          The best ideas can change who we are. YOUR STORY is where those ideas
          take shape, take off, and spark powerful conversations. We’re an open
          platform where readers come to find insightful and dynamic thinking.
          Here, expert and undiscovered voices alike dive into the heart of any
          topic and bring new ideas to the surface. Our purpose is to spread
          these ideas and deepen understanding of the world.
          <br />
          <br />
          <br />
          Tell your story : Ever since the first humans gathered around a fire
          and turned their gaze to the stars, humanity has shared knowledge
          through stories. Spaces are digital campfires for collective meaning
          making which expand knowledge sharing from interrogative to narrative.
          In Spaces, creators build audiences of millions for their unique
          insights or audiences of thousands for niche knowledge that can't be
          found anywhere else.
        </p>
        <img
          src="https://cdn.dribbble.com/users/3330024/screenshots/6471373/image.gif"
          alt="aboutIMG"
        />
      </div>
    </div>
  );
}
