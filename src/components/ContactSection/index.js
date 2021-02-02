import React from 'react';
import { useForm } from 'react-hook-form';
import {
    ContactFormContainer,
    ContactForm,
    ContactFormInput,
    ContactFormMessageInput,
    ContactFormSubmitButton,
} from './ContactElements'

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = values => console.log(values);


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
