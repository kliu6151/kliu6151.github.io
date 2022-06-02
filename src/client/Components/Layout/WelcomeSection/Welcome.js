import Classes from './Welcome.module.css';
import React from "react";

function Welcome() {
  return (
    <section className={Classes.introduction}>
      {/* <header>Welcome!</header> */}
      <paragraph>Kevin Liu</paragraph>
    </section>
  );
}

export default Welcome;
