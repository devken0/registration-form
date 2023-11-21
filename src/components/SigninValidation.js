function SigninValidation(values){
  let error = {}
  // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
  const email_pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
  const isValid = password_pattern.test(values.password);
  const emailValid = email_pattern.test(values.email);  

  if (values.email === ''){
    error.email = "This field is required"
  }
  else if(emailValid){
    error.email = '' 
  }
  else {
    error.email = ''
  }

  if (values.password === ''){
    error.password = "This field is required"
  }
  else if(isValid){
    error.password = ''
  }
  else{
    error.email = ''
  }
  return error;
}

export default SigninValidation;