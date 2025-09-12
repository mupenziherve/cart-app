import { useLorem ipsum, dolor sit amet consectetur adipisicing elit. Quam saepe unde a! Consequuntur dolor omnis perspiciatis repellendus incidunt nisi sunt qui quisquam est? Consequuntur obcaecati delectus facilis incidunt deleniti facere.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla modi expedita doloremque distinctio quibusdam doloribus corporis tempore adipisci, asperiores inventore voluptatem et, in enim mollitia minus non rerum. Rerum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam saepe unde a! Consequuntur dolor omnis perspiciatis repellendus incidunt nisi sunt qui quisquam est? Consequuntur obcaecati delectus facilis incidunt deleniti facere.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla modi expedita doloremque distinctio quibusdam doloribus corporis tempore adipisci, asperiores inventore voluptatem et, in enim mollitia minus non rerum. Rerum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam saepe unde a! Consequuntur dolor omnis perspiciatis repellendus incidunt nisi sunt qui quisquam est? Consequuntur obcaecati delectus facilis incidunt deleniti facere.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nulla modi expedita doloremque distinctio quibusdam doloribus corporis tempore adipisci, asperiores inventore voluptatem et, in enim mollitia minus non rerum. Rerum! } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from './context';
const CartItem = ({ id, img, title, price, amount }) => {

 
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => console.log('remove')}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => console.log('increase')}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => console.log('decrease')}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
