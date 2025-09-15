import CartItem from './CartItem';
import { useGlobalContext } from './context';
import cartItems from './data';
const CartContainer = () => {
  const {cart} =useGlobalContext()
  const cartArray = Array.from(cart.entries());
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus reiciendis nihil id quae dicta quidem ut suscipit alias non perspiciatis expedita fugit ratione consectetur minima, fuga temporibus. Laborum, recusandae.
  
  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id,item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$10</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
