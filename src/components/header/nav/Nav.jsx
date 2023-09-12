import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn, FiShoppingCart, FiUser} from 'react-icons/fi'
import {GoSignOut} from 'react-icons/go'
import styles from './Nav.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import {getAuth, signOut} from 'firebase/auth'
import app from '../../../../firebase'
import { useAppSelector, useAppdispatch } from '../../../hooks/redux'
import { removeUser } from '../../../stores/user/user.slice'
import { removeUserId } from '../../../stores/cart/cart.slice'
import NavCartBlock from './nav-cart-block/NavCartBlock'


const Nav = () => {
  const {isAuth} = useAuth();
  const dispatch = useAppdispatch();
  const auth = getAuth(app);
  const { products } = useAppSelector((state) => state.cartSlice);

  const handleSignOut = () => { 
    signOut(auth) .then(() => { 
      dispatch(removeUser()); 
      dispatch(removeUserId()); 
    }).catch((error) => { console.error(error); }) }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={'/cart'}><FiShoppingCart></FiShoppingCart></Link>
            {products.length > 0 && <b>{products.length}</b>}
            {products.length > 0 && <div className={styles.nav_hover_cart}><NavCartBlock></NavCartBlock></div>}
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={'/order'}><FiUser title='주문'></FiUser></Link>
          </div>
        </li>
        <li>
          {isAuth ? 
          <GoSignOut className={styles.nav_sign_out} title='로그아웃' onClick={handleSignOut}></GoSignOut>
          :
          <Link to={'/login'}><FiLogIn title='로그인'></FiLogIn></Link>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Nav
