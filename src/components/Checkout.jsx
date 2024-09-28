import React from 'react'
import Modal from './UI/Modal';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formatter';
import Input from './UI/Input';
import Button from './UI/Button';

const Checkout = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );

      const handleClose = () => {
        userProgressCtx.hideCheckout();
      }
    
  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input type='text' label='Full Name' id='full-name' />
            <Input type='email' label='Email Address' id='email' />
            <Input type='text' label='Street' id='street' />
            <div className="control-row">
              <Input label='Postal Code' type='text' id='postal-code'/>
              <Input label='City' type='text' id='city'/>
            </div>
            <p className='modal-actions'>
              <Button type='button' textOnly onClick={handleClose} >Close</Button>
              <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
  )
}

export default Checkout