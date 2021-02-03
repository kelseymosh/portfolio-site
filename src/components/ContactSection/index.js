import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import {
    ContactFormContainer,
    ContactForm,
    ContactFormInput,
    ContactFormMessageInput,
    ContactFormSubmitButton,
} from './ContactElements'
init(`${process.env.REACT_APP_USER_ID}`);

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        alert(`Thanks for your message from ${data.email}!`);
        const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
        const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
        sendFeedback(serviceId, templateId, { from_name: data.name, message: data.comment, reply_to: data.email })
        e.target.reset();
    };

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs.send(
            serviceId, templateId, variables
        ).then(result => {
            console.log("Email successfully sent!")
        })
        .catch(error => console.error("There has been an error. Here are some thoughts on the error that occured:", error))
    };

    return (
        <ContactFormContainer>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
                <ContactFormInput 
                    name="name" 
                    ref={
                        register({
                            required: "Please enter your name",
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            }
                        })
                    }
                /><br/>
                {errors.name && errors.name.message}<br/>

                <ContactFormInput 
                    name="email" 
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br/>

                <ContactFormMessageInput 
                    name="comment" 
                    ref={
                        register({
                            required: true
                        })
                    }
                /><br/>
                {errors.comment && "Oops, you forgot your message!"}<br/>

                <ContactFormSubmitButton type="submit"/>
            </ContactForm>
        </ContactFormContainer>
    );
}

export default Contact
