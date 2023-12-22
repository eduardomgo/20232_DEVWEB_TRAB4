import { forwardRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  labelText: string,
  type: "text" | "number" | "e-mail" | "password" | "textarea" | "date" | "time",
  invalid?: boolean,
  className?: string,
  supportText?: string
}

const TextInput = forwardRef<any, TextInputProps>((props, ref) => {
  const { 
    invalid, 
    className, 
    supportText, 
    labelText, 
    type, 
    ...fieldProps 
  } = props;

  const input_props = {
    ...fieldProps,
    type,
    invalid,
    ref
  }

  const inputs: any = { 
    'textarea': {tag: 'textarea', input_props}, 
    'text': {tag: 'input', input_props},
    'number': {tag: 'input', input_props},
    'e-mail': {tag: 'input', input_props},
    'password': {tag: 'input', input_props},
    'date': {tag: 'input', input_props},
    'time': {tag: 'input', input_props}
  }

  const InputTag = inputs[type].tag;
  const input_tag_props = inputs[type].input_props;

  return (
    <div>
      <label className='col-form-label' htmlFor={fieldProps.name}>{labelText}</label>
      <InputTag {...input_tag_props} className={`form-control ${className || ''}`} />
      {supportText && <p className={`body-sm ml-sm mt-xxsm support-text ${invalid ? 'invalid' : ''}`}>{supportText}</p>}
    </div>
  );
}) 

export default TextInput;