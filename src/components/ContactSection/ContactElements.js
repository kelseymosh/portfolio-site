import styled from 'styled-components'

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5%;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContactFormLabel = styled.div`
    font-size: calc(50% + 0.25vw);
`;

export const ContactFormInput = styled.input`
    border: none;
    border-bottom: 1px solid #3c3c3b;
    background-color: #fcfaf5;
    outline: none;
    padding: 3%;
    width: 250px;

    @media screen and (max-width: 768px) {
        width: 150px;
    }
`;

export const ContactFormMessageInput = styled.textarea`
    border: none;
    border-bottom: 1px solid #3c3c3b;
    background-color: #fcfaf5;
    outline: none;
    width: 250px;
    height: 100px;

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 75px;
    }
`;

export const ContactFormSubmitButton = styled.input`
    border-radius: 2px;
    background: #d4c8be;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fcfaf5;
        border: 1px solid #3c3c3b;
        color: #3c3c3b;
    }
`;

export const ContactImageWrapper = styled.div`
    display: flex;
    padding: 0 2%;
`;

export const ContactImage = styled.img`
        
    @media screen and (max-width: 768px) {
        width: 150px;
        height: auto;
    }
`;