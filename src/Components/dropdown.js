import Classes from "./dropdown.module.css";
import {HashLink} from "react-router-hash-link";
import {useState} from "react";

function DropDown() {
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    function open() {
        setDropDownIsOpen(true);
    }
    function close() {
        setDropDownIsOpen(false);
    }

    // const toggling = () => setDropDownIsOpen(!DropDownIsOpen);

    return (
        <div>
            <div className={Classes.container}>
                <button type="button" onClick={open}>
                ☰
                </button>
                {DropDownIsOpen && (<div className={Classes.drop}>
                    <ul>
                        <li>
                            <HashLink smooth to="#about">About</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#portfolio">Portfolio</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#contact">Contact me</HashLink>
                        </li>
                    </ul>
                </div>
                )} 
            </div>
        </div>
    );
}

export default DropDown;