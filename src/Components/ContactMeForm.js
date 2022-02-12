

function ContactMeForm() {
    function submitHandler(event)
    {
        event.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='Name'>Name</label>
                <input type='text' required id='Name' />
            </div>
            <div>
                <label htmlFor='Email'>Email</label>
                <input type='text' required id='Email' />
            </div>
            <div>
                <label htmlFor='Message'>Message</label>
                <input type='text' required id='Message' />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    );
}

export default ContactMeForm;