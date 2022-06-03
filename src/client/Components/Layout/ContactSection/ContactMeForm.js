import React from "react";
import axios from "axios"


function ContactMeForm() {
    // function submitHandler(event)
    // {
    //     event.preventDefault();
    // }

    return (
        <form type="POST" action='/test'>
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