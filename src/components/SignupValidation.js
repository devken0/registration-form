function SignupValidation(values){
  let error = {}
  const username_pattern = /^[a-zA-Z0-9]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

  if (values.username === ''){
    error.username = "This field is required"
  }
  else if(!username_pattern.test(values.username)){
    error.username = "Invalid username"
  }
  else {
    error.username = ''
  }
  if (values.password === ''){
    error.password = "This field is required"
  }
  else if(!password_pattern.test(values.password)){
    error.password = "Password invalid"
  }
  else{
    error.password = '' 
  }
  if (values.repeatpassword === values.password){
    error.repeatpassword = ''
  }
  else{
    error.repeatpassword = "Password doesn't match"
  }
  return error;
}

export default SignupValidation;