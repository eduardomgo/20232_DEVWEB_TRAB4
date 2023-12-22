import { ChangeEventHandler, forwardRef } from 'react';

interface CheckInputProps {
  labelText?: string,
  id?: string,
  name?: string,
  value: string,
  type?: "checkbox" | "switch" | "radio",
  maxLength?: number,
  onChange?: ChangeEventHandler,
  required?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  className?: string,
  checked?: boolean
}

const CheckInput = forwardRef<HTMLInputElement, CheckInputProps>((props, ref) => {
  const { labelText, invalid, className, ...fieldProps } = props;

  const input_props = {
    ...fieldProps,
    type: fieldProps.type === 'switch' ? 'checkbox' : fieldProps.type,
    ref
  }

  return (
    <div>
      <label className='col-form-label' htmlFor={fieldProps.name}>{labelText}</label>
      <input {...input_props} className={`col-form-label ${className || ''}`} />
    </div>
  )
}) 

export default CheckInput;