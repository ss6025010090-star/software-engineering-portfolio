import React, { useState } from "react";
import "./Contact.css";


function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });


    const [status, setStatus] = useState("");

    const [loading, setLoading] = useState(false);



    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }



    async function handleSubmit(e) {

        e.preventDefault();


        // Validation

        if(formData.name.trim().length < 2){

            setStatus("Please enter a valid name.");
            return;

        }


        if(!formData.email.includes("@")){

            setStatus("Please enter a valid email.");
            return;

        }


        if(formData.message.trim().length < 10){

            setStatus("Message must contain at least 10 characters.");
            return;

        }



        try {

            setLoading(true);
            setStatus("");



            const response = await fetch(
                "https://portfolio-backend-ycrm.onrender.com/api/messages",
                {
                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },

                    body:JSON.stringify(formData)
                }
            );



            if(response.ok){


                setStatus(
                    "✓ Message sent successfully! Thank you for contacting me."
                );


                setFormData({

                    name:"",
                    email:"",
                    subject:"",
                    message:""

                });


            }
            else{


                setStatus(
                    "✗ Failed to send message. Please try again."
                );


            }



        } catch(error){


            console.log(error);


            setStatus(
                "✗ Server error. Please try again later."
            );


        }
        finally{

            setLoading(false);

        }

    }




    return (

        <section className="contact" id="contact">


            <h1>Contact Me</h1>



            <div className="contact-container">


                <div className="contact-info">


                    <h2>Get In Touch</h2>


                    


                    <p>Email</p>

                    <a href="mailto:ss6025010090@camtech.edu.kh">

                        ss6025010090@camtech.edu.kh

                    </a>



                    <p>GitHub</p>

                    <a
                        href="https://github.com/ss6025010090-star"
                        target="_blank"
                        rel="noreferrer"
                    >

                        GitHub Profile

                    </a>


                </div>





                <form 
                    className="contact-form"
                    onSubmit={handleSubmit}
                >



                    <input

                        type="text"

                        name="name"

                        placeholder="Your Name"

                        value={formData.name}

                        onChange={handleChange}

                        required

                    />



                    <input

                        type="email"

                        name="email"

                        placeholder="Your Email"

                        value={formData.email}

                        onChange={handleChange}

                        required

                    />



                    <input

                        type="text"

                        name="subject"

                        placeholder="Subject"

                        value={formData.subject}

                        onChange={handleChange}

                        required

                    />



                    <textarea

                        name="message"

                        placeholder="Your Message"

                        rows="6"

                        value={formData.message}

                        onChange={handleChange}

                        required

                    />



                    <button type="submit">

                        {
                            loading 
                            ? "Sending..." 
                            : "Send Message"
                        }

                    </button>



                    {
                        status && (

                            <p className="status">
                                {status}
                            </p>

                        )
                    }



                </form>



            </div>


        </section>

    );

}


export default Contact;