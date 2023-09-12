import React from 'react'
import { useAppdispatch } from '../../../../hooks/redux'
import styles from './CartItem.module.scss';
import { deleteFromCart, incrementProduct, decrementProduct } from '../../../../stores/cart/cart.slice';
import { Link } from 'react-router-dom';
import {AiOutlineDelete} from 'react-icons/ai';

const CartItem = ({item}) => { 

  const dispatch = useAppdispatch();

  const deleteProduct = () => { dispatch(deleteFromCart(item.id)) }
  const incrementCount = () => { dispatch(incrementProduct(item.id)) }
  const decrementCount = () => { dispatch(decrementProduct(item.id)); }

  return (
    <div className={styles.cart_item}>
        <Link to={`/card/${item.id}`}>
            <img src={item.image} alt="product card" />
        </Link>
        <div className={styles.cart_description}>
            <h3>{item.category}</h3>
            <h2>{item.title}</h2>
            <span>${item.price} x {item.quantity}개 = ${item.total.toFixed(2)}</span>
        </div>

        <div className={styles.cart_count}>
            <div>
                <button disabled={item.quantity === 1} onClick={decrementCount}>
                    -
                </button>
                <span>{item.quantity}</span>
                <button disabled={item.quantity === 10} onClick={incrementCount}>
                    +
                </button>
            </div>

        </div>

        <button onClick={deleteProduct} className={styles.cart_delete}>
            <AiOutlineDelete />
        </button>
    </div>
  )
}

export default CartItem
