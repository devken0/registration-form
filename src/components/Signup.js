import React from 'react'
import { Link } from 'react-router-dom'
import SignupValidation from './SignupValidation';
import { useState } from 'react'

function Signup() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    repeatpassword: ''
  })
  const [errors, setErrors] = useState ({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(SignupValidation(values));
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-light p-5 rounded w-25'>
        <h2>Create your Account</h2>
        <p>to continue</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username"><strong>Username</strong></label>
            <input type="text" name="username" onChange={handleInput} className='form-control' /> 
            {errors.username && <span className='text-danger'>{errors.username}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Pasword</strong></label>
            <input type="password" name="password" onChange={handleInput} className='form-control' /> 
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <div className="mb-3">
            <label><strong>Repeat pasword</strong></label>
            <input type="password" name="repeatpassword" onChange={handleInput} className='form-control' /> 
            {errors.repeatpassword && <span className='text-danger'>{errors.repeatpassword}</span>}
          </div>
          <button className='btn btn-dark mb-3 w-100'>Create account</button>
          <p className='text-center'>Already have an account? <Link to="/" className='text-dark'> Sign in </Link></p>
          <hr></hr>
          <p className='text-secondary text-center mb-0'>By creating an account, you agree to our</p>
          <p className='text-center'><a href="#" className='text-dark'>terms and conditions</a></p>
        </form>
      </div>
    </div>
  )
}

export default Signup;