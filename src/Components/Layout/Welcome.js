import Classes from './Welcome.module.css';

function Welcome() {
  return (
    <section className={Classes.introduction}>
      {/* <header>Welcome!</header> */}
      <paragraph>Kevin Liu</paragraph>
    </section>
  );
}

export default Welcome;
