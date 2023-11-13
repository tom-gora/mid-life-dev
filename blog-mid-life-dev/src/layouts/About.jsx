import "./styles/About.css";

import { HiOutlineChevronDoubleLeft } from "react-icons/hi2";

const About = ({ setView, previousView }) => {
  return (
    <>
      <h2 className="about__title">About Me:</h2>
      <a className="about__back" onClick={() => setView(previousView === "about" ? "home" : previousView)}>
        {<HiOutlineChevronDoubleLeft />} Go Back
      </a>
      <p className="about__content">
        Hi, I’m a software development undergraduate who is passionate
        about web development. I have always been fascinated by
        computers and technology, and I have a lot of creativity and
        problem-solving skills sitting in me and yet untapped into. I
        decided to pursue education and career in IT technology in my
        mid-thirties, because frankly well.. there is only so much
        retail career one can take 😉 Along the way, I faced many
        challenges and obstacles, but I never gave up on my goals and
        this blog is intended to document my journey as a newcomer to
        the crazy complicated world of web development in the third
        decade of the 21st century. Apparently, the holy trinity of
        html, css and javascript is just the tiny tip of a massive
        iceberg, that, despite of the global warming, just refuses to
        stop growing. I hope to share more and more insights, and even
        if no-one ever reads this, the exercise of sharing itself will
        make me a better person and a better developer. Welcome and
        enjoy!
      </p>
      <a className="about__back" onClick={() => setView(previousView === "post" ? "home" : previousView)}>
        {<HiOutlineChevronDoubleLeft />} Go Back
      </a>
    </>
  );
};

export default About;
