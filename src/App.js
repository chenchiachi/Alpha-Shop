import './styles/_style.scss';
import React,{useState, useEffect} from 'react';
import { ThemeContext } from './components/store/ThemeContext'; 

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('light-mode');
  useEffect(() => {
    if (theme === 'dark-mode') {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [theme]);
return(
  <ThemeContext.Provider value={{theme, setTheme}}>
      <Header />
      <Main />
      <Footer />
  </ThemeContext.Provider>
  
)
};

export default App;