import React from 'react';

const shippingOptions = [
  {
    id: 'shipping-standard',
    name: '標準運送',
    price: 0,
    shippingTime: '約 3~7 個工作天'
  },
  {
    id: 'shipping-dhl',
    name: 'DHL 貨運',
    price: 500,
    shippingTime: '48 小時內送達'

  }
]

const Shipping = ({ id, name, price, shippingTime, onChangeFee }) => {
  return (
    <label className='radio-group col col-12'>
      <input id={id} type='radio' name='shipping' onClick={onChangeFee} />
      <div className='radio-info'>
        <div className='col col-12'>
          <div className='text'>{name}</div>
          <div className='price'>{price === 0 ? 'Free' : `$${price}`}</div>
        </div>
        <div className='period col col-12'>{shippingTime}</div>
      </div>
      <div className='radio-box-border'></div>
    </label>
  )
}



const Step2 = ({ onChangeFee, isChecked }) => {

  return (
    <React.Fragment>
      <h3 className='form-title'>運送方式</h3>
      <section className='form-body col col-12'>
        {shippingOptions.map(option =>
          <Shipping
            key={option.id}
            {...option}
            onChangeFee={() => onChangeFee(option)}
          />
        )}

      </section>
    </React.Fragment>
  )
};

export default Step2;