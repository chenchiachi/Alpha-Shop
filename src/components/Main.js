import { useState, useContext } from 'react';
import Form from './Step/Form/Form';
import Cart from './Step/Cart';
import { useInitialItems, CartProvider } from './store/CartContext';
import { FormContext } from './store/FormContext';

const Main = () => {
  const [fee, setFee] = useState(0)
  const initialItems = useInitialItems()
  const formContext = useContext(FormContext)
  const [formData, setFormData] = useState(formContext)

  const feeHandler = (shipping) => {
    setFee(shipping.price)
  }
  const handleFormChange = (e) => {
    const value = e.target.value
    const key = e.target.id
    setFormData({
      ...formData,
      [key]: value
    })
  }
  return (
    <main className='site-main'>
      <div className='main-container'>
        <FormContext.Provider
          value={{
            formData,
            setFormData,
            handleFormChange,
          }}
        >
          <Form onChangeFee={feeHandler} />

          <CartProvider initialItems={initialItems}>
            <Cart fee={fee} />
          </CartProvider>
        </FormContext.Provider>
      </div>
    </main>
  )
};

export default Main;