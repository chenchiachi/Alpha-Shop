const InputGroup = props => {
  const inputId = "input-" + props.id
  return (
    <div className={inputId}>
      <label htmlFor={props.id} className="input-label">{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  )
};

export default InputGroup;