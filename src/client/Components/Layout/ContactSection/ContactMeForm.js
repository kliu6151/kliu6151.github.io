import axios from "axios";
import React, {useState} from "react";
import Classes from "./ContactMeSection.module.css";


function ContactMeForm() {

    const formId = 'us2LOldY';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const initialState = {
        email: '',
        name: '',
        message: ''
    }

    const initialM = {
        msg: ''
    }

    const[formState, setFormState] = useState(initialState);
    const [message, setMessage] = useState(initialM);
    

    const submission = async (event) => {
        event.preventDefault();
        await postSubmission();
    }

    const postSubmission = async() => {
        const payload = {
            ...formState,
        };

        try {
            await axios.post(formSparkUrl, payload);
            setMessage({
                msg: "Thank you! I will be in touch with you shortly"
            });
        } catch (error) {
            console.log(error);
        }
    }

    const updateForm = (e) => {
        const { id, value } = e.target;
        const updatedFormState = { ...formState };
        updatedFormState[id] = value;
        setFormState(updatedFormState);
    }

    return (
        <div>
            <h2 className = {Classes.msgSuc}>
                {message.msg}
            </h2>
            <form type="POST" onSubmit = {submission} >
                <label htmlFor='Name' >Name</label>
                <div>
                    <input type='text' required id='name' placeholder="Input your name" value={formState.name} onChange={updateForm}/>
                </div>

                <label htmlFor='Email' >Email</label>
                <div>
                    <input type='text' required id='email' placeholder="Input your email" value={formState.email} onChange={updateForm} />
                </div>

                <label htmlFor='Message'>Message</label>
                <div>
                    
                    <textarea type='text' required id='message' rows={5} placeholder="message" value={formState.message} onChange={updateForm}></textarea>
                </div>

                <div>
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default ContactMeForm;