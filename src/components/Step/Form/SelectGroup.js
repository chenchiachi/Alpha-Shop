const SelectGroup = props => {
  const inputId = 'input-' + props.id
  return (
    <div className={inputId}>
      <label className='input-label'>{props.label}</label>
      <div className='select-container'>
        <select required>
          {props.options.map(option => <option key={option.value}value={option.value}>{option.name}</option>)}

        </select>
      </div>
    </div>
  )
}

export default SelectGroup;