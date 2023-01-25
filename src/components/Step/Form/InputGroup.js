import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';
const InputGroup = props => {
  const { handleFormChange } = useContext(FormContext)
  const inputId = "input-" + props.id
  return (
    <div className={inputId}>
      <label htmlFor={props.id} className="input-label">{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={handleFormChange} />
    </div>
  )
};

export default InputGroup;