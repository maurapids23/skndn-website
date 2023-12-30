import React from 'react'

export const FormInput = (props) => {
    const {label, onChange, id, ...inputProps} = props
  return (
    <div className='formInput'>
        <label>{props.label}</label>
        <input {...inputProps} onChange={onChange}/>
    </div>
  )
}
