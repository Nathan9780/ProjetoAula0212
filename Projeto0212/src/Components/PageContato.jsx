import React from 'react'
import '/src/CSS/pagecontato.css'
function PageContato() {
  return (
    <div className='section-card-container'>
    <section id='Contato' className='section-card-center'>
        <h2 className='section-title-center'>Envie uma Mensagem</h2>
        <form className='contact-form' action="">
           <input type='text' placeholder='Nome' className='contact-input'/>
           <input type='email' placeholder='Email' className='contact-input'/>
           <textarea placeholder='Mensagem' className='contact-textarea'></textarea>
        <button type='submit' className='contact-button'>Enviar</button>

        </form>
    </section>
    </div>
  )
}

export default PageContato
