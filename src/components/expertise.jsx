import React from "react";
import webdesign from "./assests/icons/webdesign.png";
import webdevelopment from "./assests/icons/webdevelopment.png";
import seo from "./assests/icons/seo.png";
import brand from "./assests/icons/brand.png";
import content from "./assests/icons/content.png";
import social from "./assests/icons/social.png";
import ExpertiseComponent from "./expertisecomponent";
import "./styles/expertise.css";
import "./styles/style.css";
export default function expertise() {
  return (
    <div className="expertisebody">
      <h1>Our Expertise</h1>
      <hr />
      <ExpertiseComponent
        imgname={webdesign}
        heading="Web Design"
        content="Imagine We're crafting your online home. It's not just about good looks; it's about making visitors say, “Wow, I love this place!” every time they drop by. While you just sit back and we put in the work for you."
        list_elem_1="Responsive Design"
        list_elem_2="Wireframing"
        list_elem_3="UX Writing"
        number="01."
      />
      <hr />
      <ExpertiseComponent
        imgname={webdevelopment}
        heading="Web Development"
        content="We're the builders, engineers, and magicians working behind the curtain, making sure your site doesn’t just look good—it works like a dream, scales as you grow, and never lets you down."
        list_elem_1="CMS Integration"
        list_elem_2="Motion & Animations"
        list_elem_3="3D Development"
        number="02."
      />
      <hr />
      <ExpertiseComponent
        imgname={seo}
        heading="SEO"
        content="Your website is the destination awaiting to be explored; Our SEO is the lighthouse making sure customers find their way to you, cutting through the foggy internet sea.
        "
        list_elem_1="Technical SEO"
        list_elem_2="On-Page Optimization"
        list_elem_3="SEO Audits & Analysis"
        number="03."
      />
      <hr />
      <ExpertiseComponent
        imgname={brand}
        heading="Brand Design"
        content="Picture us as the artist sketching out your brand's tattoo. We make sure it’s something you’ll want to show off everywhere; consistent, cool, and totally you."
        list_elem_1="Brand Identity"
        list_elem_2="Mock-ups"
        list_elem_3="Brand Guidelines"
        number="04."
      />
      <hr />
      <ExpertiseComponent
        imgname={content}
        heading="Content Creation"
        content="We're the storytellers turning your message into eye candy—graphics that pop and videos that keep viewers glued. It’s like Netflix for your brand, but better because it’s all about you."
        list_elem_1="Video Editing"
        list_elem_2="Graphic Designing"
        list_elem_3="Content Writing"
        number="05."
      />
      <hr />
      <ExpertiseComponent
        imgname={social}
        heading="Social Media Management"
        content="Think of us as your social media chefs. We cook up the kind of posts that get likes, shares, and loves, while experimenting with few innovative recipes of our own, making your brand the talk of the town.
        "
        list_elem_1="Content Research"
        list_elem_2="Content Planning"
        list_elem_3="Page Analytics"
        number="06."
      />
    </div>
  );
}
