import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchProduct } from '../../stores/products/product.slice';
import { useAppSelector, useAppdispatch } from '../../hooks/redux';
import styles from './DetailPage.module.scss'
import Loader from '../../components/loader/Loader'
import { addToCart } from '../../stores/cart/cart.slice';

const DetailPage = () => {

  const {id} = useParams();
  const productId = Number(id); //숫자형태로 가져오기
  const dispatch = useAppdispatch();

  const { product, isLoading } = useAppSelector((state) => state.productSlice);
  const { products } = useAppSelector((state) => state.cartSlice);
  const productMatching = products.some((prod) => prod.id === product.id); 

  useEffect(()=> {
    dispatch(fetchProduct(productId));
  },[productId])
  
  const addItemToCart = () => {dispatch(addToCart(product))};

  return (
    <div className='page'>
      { isLoading ? (<Loader></Loader>) : 
      <div className={styles.card_wrapper}>
        <div className={styles.card_img}>
          <img src={product.image} alt="product card" />
        </div>
        <div className={styles.card_description}>
          <h3>{product.category}</h3>
          <h1>{product.title}</h1>
          <h4>$ {product.price}</h4>
          <p>{product.description}</p>            
          <div>
              <button
                disabled={productMatching}
                onClick={() => !productMatching && addItemToCart()} //버튼을 눌렀을 때 장바구니에 없는 제품이면 추가하기
              >
                {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
              </button>
              <Link to="/cart">장바구니로 이동</Link>
            </div>
        </div>
      </div>
    }
    </div>
  )
}

export default DetailPage
