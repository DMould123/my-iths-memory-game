import React from 'react';

const Contact = () => {

  return (
    <div id='contact'>
    <h1 className="heading" style={{marginBottom: '75px'}}>Contact Me</h1>
      <form
        action="mailto:david.mould@iths.se"
        method="post"
        enctype="text/plain"
      >
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' placeholder='Enter your name' required/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' placeholder='Enter your email' required/>
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' id='message' placeholder='Enter your message' required/>
        </div>
        <div className='form-group'>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
