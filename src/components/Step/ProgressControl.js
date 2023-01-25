import { useContext } from 'react';
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg';
import { FormContext } from '../store/FormContext';
const ProgressControl = ({ currentStep, onChange }) => {
  const { formData } = useContext(FormContext)
  const handleSubmitClick = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className='progress-control-container col col-lg-6 col-sm-12'>
      {currentStep === 1 && <section className='button-group col col-12 ' >
        <button className='next cursor-point' onClick={onChange} id='next'>
          下一步
          <RightArrow className='svg' />
        </button>
      </section>}
      {currentStep === 2 &&
        <section className='button-group col col-12'>
          <button className='prev cursor-point' onClick={onChange} id='prev' >
            <LeftArrow className='svg' />
            上一步
          </button>
          <button className='next cursor-point' onClick={onChange} id='next'>
            下一步
            <RightArrow className='svg' />
          </button>
        </section>
      }
      {currentStep === 3 &&
        <section className='button-group col col-12' >
          <button className='prev cursor-point' onClick={onChange} id='prev'>
            <LeftArrow className='svg' />
            上一步
          </button>
          <button type="submit" className='next cursor-point' onClick={handleSubmitClick}>
            確認下單
          </button>
        </section>}
    </section>
  )
};

export default ProgressControl;