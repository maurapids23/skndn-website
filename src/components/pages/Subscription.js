import React, { useRef, useState } from 'react'
import { FormInput } from '../FormInput'
import "../FormInput.css"

function Subscription() {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmationPass:""
  });

  const inputs = [
    {
      id:1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username"
    },
    {
      id:2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email"
    },
    {
      id:3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password"
    },
    {
      id:5,
      name: "confirmationPass",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password"
    },
  ]
  const usernameRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) =>{
    setValues({ ...values, [e.target.name]: e.target.value})
  }

  console.log(values)

  return (
    <div className='app-form'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value= {values[input.name]} onChange={onChange}/>
            ))}
            <button className='btn--form btn--large'>SUBSCRIBE</button>
        </form>
        
    </div>
  )
}

export default Subscription