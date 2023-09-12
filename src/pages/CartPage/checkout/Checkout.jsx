import React, { useEffect } from 'react'
import { useAppSelector, useAppdispatch } from '../../../hooks/redux'
import { getTotalPrice, postOrder } from '../../../stores/cart/cart.slice';
import styles from './Checkout.module.scss'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


const Checkout = () => {

  const cart = useAppSelector(state => state.cartSlice);
  const dispatch = useAppdispatch();
  const sendOrder = () => {
    dispatch(postOrder(cart));
  }
  const {isAuth} = useAuth();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [])


  return (
    <div className={styles.checkout}>
      <div>
        <p>{' '}<span>합계 : </span> $ {cart.totalPrice?.toFixed(2)}</p>
        {isAuth ? <button className={styles.checkout_button} onClick={()=>sendOrder()}>계산하기</button>
          : <Link className={styles.checkout_button} to='/login'>로그인</Link>
        }
      </div>
    </div>
  )
}

export default Checkout
