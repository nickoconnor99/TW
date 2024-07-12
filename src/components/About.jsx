import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2">
        <img src={aboutSvg} className="w-full h-64"></img>
        <article>
          <SectionTitle text="code and coffee"></SectionTitle>
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            soluta, praesentium impedit laudantium debitis, quod omnis commodi
            vel ab harum aspernatur molestias minus suscipit dolores quasi unde
            saepe sed. Optio? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eos, libero adipisci praesentium mollitia nostrum,
            dolorem suscipit ullam facere assumenda asperiores odit nemo
            architecto aliquid fugiat eaque consequatur, facilis quibusdam
            provident.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
