import Classes from "./AboutSection.module.css";
import pfp from "./linkedinpfp.jpg";

function AboutMe() {
  return (
    <section className={Classes.aboutSection} id="about">
      <header>About</header>
      <div>Me</div>
      <paragraph className={Classes.para}>
        I am an aspiring software engineer. I am a Junior Undergraduate
        attending Stony Brook University and will be graduating in May 2023. I
        am currently interested in web development, which is why I made this
        website myself. Feel free to explore and contact me!
      </paragraph>
        <img src={pfp} alt="pfp" />
    </section>
  );
}

export default AboutMe;
