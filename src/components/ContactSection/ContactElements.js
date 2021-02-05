import styled from 'styled-components';

export const ContactFormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        padding: 0 5%;
    }
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
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
`;

export const ContactFormMessageInput = styled.textarea`
    border: none;
    border-bottom: 1px solid #3c3c3b;
    background-color: #fcfaf5;
    outline: none;
    padding: 3%;
    height: 100px;
`;

export const ContactFormErrorMessageWrapper = styled.div`
    padding: 2% 3% 5% 3%;
    font-size: calc(50% + 0.25vw);
    color: #a5806e;
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
    padding-left: 2%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 5% 0;
    }
`;

export const ContactImage = styled.img`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ContactImageMobile = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;
    }
`;