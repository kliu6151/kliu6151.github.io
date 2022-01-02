import Classes from "./dropdown.module.css";
import {HashLink} from "react-router-hash-link";
import {useState} from "react";
import onClickOutside from 'react-onclickoutside';

function DropDown() {
    const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
    DropDown.handleClickOutside = () => setDropDownIsOpen(false);


    function open() {
        setDropDownIsOpen(true);
    }
    function Close() {
        setDropDownIsOpen(false);
    }


    return (
        <div>
            <div className={Classes.container}>
                <button type="button" onClick={open} >
                ☰
                </button>
                {DropDownIsOpen ? (
                <div className={Classes.drop}>
                    <ul>
                        <li>
                            <HashLink smooth to="#about" onClick={Close}>About</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#portfolio" onClick={Close}>Portfolio</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#contact" onClick={Close}>Contact me</HashLink>
                        </li>
                    </ul>
                    <button type="button" className={Classes.cancelButton} onClick={Close}>
                        X
                    </button>
                </div>
                ) : null} 
            </div>
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => DropDown.handleClickOutside,
};
export default onClickOutside(DropDown,clickOutsideConfig);