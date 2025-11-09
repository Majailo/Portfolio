import React, {useRef} from 'react';
import emailjs from "@emailjs/browser"
import './FormContact.css'

function FormContact ({fullname ,email , message , row , col}){
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // toujours et toujours ....empecher le rechargement de la page

    emailjs
      .sendForm(
        "service_form_cv", // ID de ton service EmailJS
        "template_378c2hl", // ID de ton template EmailJS
        form.current,
        "XFSQKiJGgk8166MN0" //clef public
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé !");
          e.target.reset(); // réinitialise le formulaire
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi !");
        }
      );
  };
    
    
    
    return (

        
    <form className="form-Contact" ref ={form} onSubmit={sendEmail}>
            <div className='main-title' >
                <h2 className='title' >Contact form</h2>
            </div>
            <div className='text-box'>
                <label> {fullname} </label>
                <input className='inp' type="text" name="user_name" placeholder='Nom et prenom' />
            </div>

            <div className='text-box'>
                <label > {email} </label>
                <input className='inp' type="email" name="user_email" placeholder= "Email" />
            </div>

               <div className='text-box'>
                <label > {message} </label>
                <textarea placeholder="Message" name="message" id="message" rows={row} cols={col} ></textarea>
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>




        </form>

        



    )



}
export default FormContact;