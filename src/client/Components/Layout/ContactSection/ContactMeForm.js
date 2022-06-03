import React, {useState} from "react";
import Classes from "./ContactMeSection.module.css";


function ContactMeForm() {
    const[hideForm, setHideForm] = useState(hideForm);

    
    const hidingForm = () => setHideForm(true);
    return (
        <form type="POST" onSubmit = {hidingForm} className={Classes.specForm ? hideForm : null}>
            <label htmlFor='Name' >Name</label>
            <div>
                <input type='text' required id='Name' placeholder="Input your name"/>
            </div>

            <label htmlFor='Email' >Email</label>
            <div>
                <input type='text' required id='Email' placeholder="Input your email" />
            </div>

            <label htmlFor='Message'>Message</label>
            <div>
                
                <textarea type='text' required id='Message' rows={5} placeholder="message"></textarea>
            </div>

            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
}

export default ContactMeForm;