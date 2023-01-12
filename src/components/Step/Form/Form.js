import React from 'react';
import Step1 from '../Step1';
import Step2 from '../Step2';
import Step3 from '../Step3';
import StepProgress from '../StepProgress';


const Form = () => {
  return (
      <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
      <StepProgress className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0" />
        <form className='form-container'>
          <Step1 />
          {/* <Step2 />
        <Step3 /> */}
        </form>
      
  </section>
  )
};

export default Form;