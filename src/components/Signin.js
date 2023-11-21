import React from 'react'
import { Link } from 'react-router-dom'
import SigninValidation from './SigninValidation'
import { useState } from 'react'

function Signin() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState ({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(SigninValidation(values));
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-light p-5 rounded w-25'>
        <h2>Sign In</h2>
        <p>to continue</p>
        <form action="/welcome" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type='email' name='email' onChange={handleInput} className='form-control' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Pasword</strong></label>
            <input type='password' name='password' onChange={handleInput} className='form-control' /> 
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-dark mb-3 w-100'>Sign in</button>
          <p className='text-center'>New here? <Link to='/signup' className='text-dark'>Create account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin;