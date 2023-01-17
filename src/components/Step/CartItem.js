
import { ReactComponent as MinusIcon } from '../../assets/minus.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';

const CartItem = ({ img, name, quantity, price,onRemove, onAdd }) => {
  

  return (
    <div className='product-container col col-12' >
      <img className='img-container' src={img} />
      <div className='product-info'>
        <div className='product-name'>{name}</div>
        <div className='product-control-container'>
          <div className='product-control'>
            <MinusIcon className="product-action minus" onClick={onRemove} />
            <span className='product-count'>{quantity}</span>
              <PlusIcon className="product-action plus" onClick={onAdd} />
          </div>
        </div>
        <div className='price'>${price}</div>
      </div>
    </div>
  )
} ;

export default CartItem; 