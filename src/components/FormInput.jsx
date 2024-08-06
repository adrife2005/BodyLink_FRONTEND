import { useState } from 'react'
import '../css/components/forminput.css'


const FormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true)
  }


  return (
    <>
      <div className="FormInput">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString() } onFocus={() => inputProps.name === "reafirmarcontraseña" && setFocused(true)} autoComplete='off'/>
        <span>{errorMessage}</span>
      </div>
    </>
  )
}

export default FormInput