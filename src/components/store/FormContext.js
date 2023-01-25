import { createContext } from "react";

const initialCardInfo = {
  cardHolder: '',
  cardNumber: '',
  cardDate: '',
  cardCvc: ''
};

export const FormContext = createContext(initialCardInfo)




