import React from "react";
import ShowcaseComponent from "./showcasecomponent";
import "./styles/showcase.css";
import ShowcaseComponentReverse from "./showcasecomponentreverse";
export default function showcase() {
  return (
    <div className="showcase">
      <h1 className="commonheader">Our Projects</h1>
      <ShowcaseComponent
        heading="ADLIFE NGO"
        content="This website provides a platform for NGO to Changing Lives by providing them a platform to build trust, showcase their work, collect donations and gather people who wan to make a difference in society.
        AD Life is an 18-year-old Trust that is passionate about making a difference in the lives of people who are marginalized or vulnerable. This passion is reflected in our motto. Adding Value to Life’."
        speaker="Meenakshi"
        post="(Designing Head)"
      />
      <ShowcaseComponentReverse
        heading="STUDENTIFY"
        content="A website created for students all over the world, which empowers students to quickly increase their productivity & reduce stress, it has everything a student will need, from attendance tracker to time table manager, expense manager  Discover the tools that will help you stay organized and focused on your academic journey."
        speaker="GaganDeep"
        post="(Senior Developer)"
      />
      <ShowcaseComponent
        heading="INVESTO - BOT"
        content="Investment Consulting at your fingertips, Get personalized investment advice based on your risk profile, goals, and investment horizon. Our experts will help you make informed decisions and maximize your returns. A website to help the Investors from beginner to expert, talk to AI which understands you & teach you the way you understand. "
        speaker="GaganDeep"
        post="(Senior Developer)"
      />
    </div>
  );
}
