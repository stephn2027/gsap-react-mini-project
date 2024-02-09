import emailjs from '@emailjs/browser';

const PUBLIC_KEY =  process.env.REACT_APP_API_EMAILJS_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_API_EMAILJS_PRIVATE_KEY;
const SERVICE_ID = process.env.REACT_APP_API_EMAILJS_SERVICE_ID; 


export const sendEmail = (e,form) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };