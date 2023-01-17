import { useState } from 'react';
import Form from './Step/Form/Form';
import Cart from './Step/Cart';
import ProgressControl from './Step/ProgressControl';
const Main = props => {
  const [currentStep, setCurrentStep] = useState(1)
  const [fee, setFee] = useState(0)

  const stepHandler = (e) => {
    const progressBtn = e.target.id
    if (progressBtn === 'next') {
      setCurrentStep(currentStep + 1)
    }
    if (progressBtn === 'prev') {
      setCurrentStep(currentStep - 1)
    }
  };

  const feeHandler = (shipping) => {
    setFee(shipping.price)
  }

  return (
    <main className='site-main'>
      <div className='main-container'>
        <Form currentStep={currentStep} onChangeFee={feeHandler} />
        <Cart fee={fee} />
        <ProgressControl onChange={stepHandler} currentStep={currentStep} />
      </div>
    </main>
  )
};

export default Main;