import React from 'react'

export default function Input(props) {
    const {placeholder, type,value, onChange} = props;
  return (
    <div>
            <input type={type} placeholder={placeholder} value={value}  onChange={(e)=>onChange(e.target.value)} className='border' id="input-id"/>

    </div>
  )
}
