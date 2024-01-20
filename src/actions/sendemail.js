import { Resend } from "resend";

import { validateValue } from "../lib/utils";
import { getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/contact-form-emai";
import React from "react";

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);




export const sendEmail = async (formData)=>{
   
    console.log('Running on server');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('senderMessage');
  const senderName = formData.get('senderName');

  if(!validateValue(senderEmail,500)){
    return {
      error:'invalid email'
    }
  }
  if(!validateValue(message, 5000)){
    return {
      error:'invalid message'
    }
  }
  if(!validateValue(senderName, 100)){
    return {
      error:'invalid message'
    }
  }

  let data;
   try {
    data = await resend.emails.send({
      from:"Contact form <onboarding@resend.dev>",
      to:"deopalculanphotography@outlook.com",
      subject:"Message from contact form",
      reply_to:senderEmail,
      react:React.createElement(ContactFormEmail,{
        message: message,
        senderEmail:senderEmail,
        senderName:senderName,
      })
    });
    
   } catch (error) { 
    return {
      error: getErrorMessage(error),
    }
    
   }
   return {
    data,
   }
 

    
  };