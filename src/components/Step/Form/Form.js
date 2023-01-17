import React from 'react';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import StepProgress from '../StepProgress';


const Form = ({ currentStep, onChangeFee }) => {
  return (
    <section className="register-container col col-lg-6 col-sm-12" >
      <StepProgress className="register-container col col-lg-6 col-sm-12" currentStep={currentStep} />
      <form className='form-container'>
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 onChangeFee={onChangeFee} />}
        {currentStep === 3 && <Step3 />}
      </form>

    </section>
  )
};

export default Form;