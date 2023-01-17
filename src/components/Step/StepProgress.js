import React from 'react';
import { ReactComponent as CompleteIcon } from '../../assets/pg-complete.svg';

function Step({ currentStep, step, label }) {
  return (
    <span className={`progress-group ${ currentStep >=step ? 'step-current' : ''}`} >
      <span className="progress-icon  ">
        <span className="text">
        {currentStep > step ? <CompleteIcon className="icon" /> : step}
        </span>
      </span>
      <span className="progress-label">{label}</span>
    </span>
  )
}

const ProgressBar = ({className}) => {
  return (
    <span className={className}></span>
  );
}

const StepProgress = ({ currentStep }) => {
  return (
    <React.Fragment>
      <h2 className="register-title col col-12">結帳</h2>
      <section className="progress-container col col-12">
        <Step
          currentStep={currentStep}
          step={1}
          label={'寄送地址'}
        />
        <ProgressBar className="progress-bar"/>
        <Step
          currentStep={currentStep}
          step={2}
          label={'運送方式'}
        />
        <ProgressBar className={`progress-bar${currentStep >= 2 ? '' : '-undone'}`} />
        <Step
          currentStep={currentStep}
          step={3}
          label={'付款資訊'}
        />
      </section>
    </React.Fragment>
  )
};

export default StepProgress;