import React, { useEffect } from 'react'
import { useAppSelector, useAppdispatch } from '../../../hooks/redux'
import styles from './CardList.module.scss'
import { fetchProducts } from '../../../stores/products/products.slice';
import CardItem from './card-item/CardItem';
import CardSkeleton from './card-skeleton/CardSkeleton';

const CardList = () => {

  const dispatch = useAppdispatch();
  const {products, isLoading} = useAppSelector(state => state.productsSlice)
  const category  = useAppSelector(state => state.categoriesSlice)

  useEffect(()=> {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category])

  if(isLoading) return <CardSkeleton></CardSkeleton>

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CardItem key={product.id} item={product}></CardItem>)}
    </ul>
  )
}

export default CardList
