import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import {
    ContactFormContainer,
    ContactForm,
    ContactFormLabel,
    ContactFormInput,
    ContactFormMessageInput,
    ContactFormErrorMessageWrapper,
    ContactFormSubmitButton,
    ContactImageWrapper,
    ContactImage,
    ContactImageMobile,
} from './ContactElements'
init(`${process.env.REACT_APP_USER_ID}`);

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        alert(`Thanks for your message ${data.name}!`);
        const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
        const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
        sendFeedback(serviceId, templateId, { from_name: data.name, message: data.comment, reply_to: data.email });
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
            <ContactImageWrapper>
                <ContactImageMobile src="/assets/ContactMobile.svg" alt="lets chat"/>
            </ContactImageWrapper>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
                <ContactFormLabel>NAME</ContactFormLabel>
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
                />
                <ContactFormErrorMessageWrapper>{errors.name && errors.name.message}<br/></ContactFormErrorMessageWrapper>
                
                <ContactFormLabel>EMAIL</ContactFormLabel>
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
                />
                <ContactFormErrorMessageWrapper>{errors.email && errors.email.message}<br/></ContactFormErrorMessageWrapper>
                
                <ContactFormLabel>MESSAGE</ContactFormLabel>
                <ContactFormMessageInput 
                    name="comment" 
                    ref={
                        register({
                            required: true
                        })
                    }
                />
                <ContactFormErrorMessageWrapper>{errors.comment && "Oops, you forgot your message!"}<br/></ContactFormErrorMessageWrapper>

                <ContactFormSubmitButton type="submit" value="SUBMIT"/>
            </ContactForm>
                <ContactImageWrapper>
                    <ContactImage src="/assets/Contact.svg" alt="lets chat"/>
                </ContactImageWrapper>
        </ContactFormContainer>
    );
}

export default Contact
