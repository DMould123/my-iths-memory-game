import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div id='contact'>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' name='name' />
        <label>Email</label>
        <input type='email' name='email' />
        <label>Message</label>
        <textarea name='message' />
        <input id='submit' type='submit' value='Send' />
      </form>
    </div>
  )
}

export default Contact
