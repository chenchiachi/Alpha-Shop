import { useState } from 'react';
import { useEffect } from 'react';
import CartItem from './CartItem';
import { useInitialItems } from '../store/CartContext';


const Cart = ({ fee }) => {
  const initialItems = useInitialItems()

  const [items, setItems] = useState(initialItems)

  const [amount, setAmount] = useState(0)

  const addItemHandler = (itemId) => {
    setItems(preItems => {
      const updatedItems = preItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        } else {
          return item
        }
      })
      amountHandler(updatedItems);
      return updatedItems;
    })

  };

  const removeItemHandler = (itemId) => {
    setItems(preItems => {
      const updatedItems = preItems.map(item => {
        if (itemId === item.id) {
          return item.quantity > 0
            ? {
              ...item,
              quantity: item.quantity - 1
            } : item
        } else {
          return item
        }
      })
      amountHandler(updatedItems)
      return updatedItems
    })

  };
  useEffect(() => {
    amountHandler(items);
  });



  const amountHandler = (items) => {
    const itemsAmount = items.reduce((a, b) => a + b.price * b.quantity, 0);
    const updatedAmount = itemsAmount + fee
    setAmount(updatedAmount)

  }
  return (
    <section className='cart-container col col-lg-5 col-sm-12'>
      <h3 className='cart-title'>購物籃</h3>
      <section className='product-list col col-12'>
        {items.map(item =>
          <CartItem
            {...item}
            key={item.id}
            onAdd={() => addItemHandler(item.id)}
            onRemove={() => removeItemHandler(item.id)
            }
          />
        )}

      </section>

      <section className='cart-info shipping col col-12'>
        <div className='text'>運費</div>
        <div className='price'>{fee === 0 ? 'Free' : fee}</div>
      </section>
      <section className='cart-info total col col-12'>
        <div className='text'>小計</div>
        <div className='price'>{amount}</div>
      </section>
    </section>
  )
};

export default Cart;