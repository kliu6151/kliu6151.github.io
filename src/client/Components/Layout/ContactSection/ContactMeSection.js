import Classes from "./ContactMeSection.module.css";
import React from "react";
import ContactMeForm from "./ContactMeForm";

function ContactMe() {

  return (
    <section className={Classes.contactMeSection}>
      <header id = {Classes["contactTitle"]}>Contact me</header>
      <div className={Classes.form}>
        {<ContactMeForm />}
      </div>
    </section>
  );
}

export default ContactMe;
