import React from 'react'
import styles from './CardItem.module.scss'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import {useAppSelector, useAppdispatch} from '../../../../hooks/redux'
import { addToCart } from '../../../../stores/cart/cart.slice'

const CardItem = ({item}) => {

  const { products } = useAppSelector(state => state.cartSlice);
  const productMatching = products.some((product) => product.id ===item.id); //하나라도 통과하면 true 반환
  const dispatch = useAppdispatch();
  const addItemToCart = () => {dispatch(addToCart(item))}

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
      <img src={item.image} width={"80%"} height={"200px"} alt="product card" />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button disabled={productMatching} onClick={()=> !productMatching && addItemToCart()}> 
          {productMatching ? <FiShoppingCart></FiShoppingCart>  : "🛒 담기"}
        </button>
        <p>$ {item.price}</p>
      </div>

    </li>
  )
}

export default CardItem
