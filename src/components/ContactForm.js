import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || subject === '' || message === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const templateParams = {
      from_name: name,
      subject: subject,
      message: message,
    };

    emailjs
      .send('service_026r5mq', 'template_m0ieyom', templateParams, 'aIuBHTE_9vpDK9Yal')
      .then(
        (response) => {
          console.log('E-MAIL ENVIADO', response.status, response.text);
          setName('');
          setSubject('');
          setMessage('');
          setEmailSent(true);
        },
        (err) => {
          console.log('ERRO: ', err);
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
      );
  };

  return (
    <>
      {emailSent ? (
        <p className="success-message">Mensagem enviada com sucesso!</p>
      ) : (
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Seu Nome"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Assunto"
            className="form-input"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <textarea
            placeholder="Sua Mensagem"
            className="form-textarea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit" className="form-button">Enviar Mensagem</button>
        </form>
      )}
    </>
  );
}

export default ContactForm; 