import Classes from "./MainContent.module.css";


function MainContent() {
        return (
        <div className={Classes.test}>
            <section className={Classes.introduction}>
                <header>Welcome!</header>
                <paragraph>My name is Kevin Liu and Description of me here</paragraph>
            </section>
            <section className={Classes.aboutSection} id="about">
                <header>About me!</header>
                <paragraph>Hello welcome to my page, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</paragraph>    
            </section>
            <section className={Classes.portfolioSection}>
                <header>My Projects</header>
                <paragraph>My current projects</paragraph>
            </section>
            <section className={Classes.contactMeSection}>
                <header>Contact me</header>
                //Create a form here
            </section>
        </div>
        );
}

export default MainContent;
