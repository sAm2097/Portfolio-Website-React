import './Form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <label>Name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='text'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea type='text' rows='6' placeholder='Enter message'></textarea>
        <button className='btn'>Submit</button>
    </div>
  )
}

export default Form