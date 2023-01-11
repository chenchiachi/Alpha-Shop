import React from 'react';
import InputGroup from './Form/InputGroup';

const Step3 = () => {
return (
  <React.Fragment>
    <h3 className='form-title'>付款資訊</h3>
    <section className='form-body col'>
      <InputGroup 
        id='card-holder'
        type='text'
        label='持卡人姓名'
        placeholder='John Doe'
        />
      <InputGroup
        id='card-number'
        type='number'
        label='卡號'
        placeholder='1111 2222 3333 4444'
      />
      <InputGroup
        id='card-date'
        type='text'
        label='有效期限'
        placeholder='MM/YY'
      />
      <InputGroup
        id='card-cvc'
        type='number'
        label='CVC / CCV'
        placeholder='123'
      />
      
    </section>
  </React.Fragment>
)
};

export default Step3;