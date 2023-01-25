import { createContext, useContext } from "react";
import product1Img from '../../assets/product-1.jpg';
import product2Img from '../../assets/product-2.jpg';

const DUMMY_ITEMS = [
  {
    id: 1,
    name: '破壞補丁修身牛仔褲',
    img: product1Img,
    price: 100,
    quantity: 0,
  },
  {
    id: 2,
    name: '刷色直筒牛仔褲',
    img: product2Img,
    price: 200,
    quantity: 0,
  }
];


const CartContext = createContext(DUMMY_ITEMS);

export const CartProvider = ({ children, initialItems }) => {
  return (
    <CartContext.Provider value={initialItems}>
      {children}
    </CartContext.Provider>
  )
};

export const useInitialItems = () => {
  const initialItems = useContext(CartContext)
  return initialItems
};