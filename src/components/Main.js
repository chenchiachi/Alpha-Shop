import Form from './Step/Form/Form';
import Cart from './Step/Cart';
import ProgressControl from './Step/ProgressControl';
const Main = () => {
  return (
    <main className='site-main'>
      <div className='main-container'>
        <Form />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  )
};

export default Main;