import Classes from "./dropdown.module.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import onClickOutside from "react-onclickoutside";

function DropDown() {
  const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
  DropDown.handleClickOutside = () => setDropDownIsOpen(false);

  function open() {
    setDropDownIsOpen(true);
  }
  function Close() {
    setDropDownIsOpen(false);
  }
  let menu = "";
  if (setDropDownIsOpen) {
  }

  let a = "";
  if (!DropDownIsOpen) {
    a = (
      <button type="button" onClick={open}>
        ☰
      </button>
    );
  }
  let b = "";
  if (DropDownIsOpen) {
    b = (
      <button type="button" onClick={Close}>
        X
      </button>
    );
  }

  return (
    <div>
      <div className={Classes.container}>
        {a}
        {b}
        {DropDownIsOpen ? (
          <div className={Classes.drop}>
            <ul>
              <li>
                <HashLink smooth to="#about" onClick={Close}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#portfolio" onClick={Close}>
                  Portfolio
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact" onClick={Close}>
                  Contact me
                </HashLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
};
export default onClickOutside(DropDown, clickOutsideConfig);
