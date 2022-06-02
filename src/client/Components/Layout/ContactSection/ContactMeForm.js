import React from "react";
import axios from "axios"


function ContactMeForm() {
    function submitHandler(event)
    {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='Name'>Name</label>
            <div>
                
                <input type='text' required id='Name' />
            </div>
            <label htmlFor='Email'>Email</label>
            <div>
                
                <input type='text' required id='Email' />
            </div>
            <label htmlFor='Message'>Message</label>
            <div>
                
                <textarea type='text' required id='Message' rows={5} ></textarea>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
}

export default ContactMeForm;