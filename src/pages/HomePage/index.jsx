import React from 'react'
import FiltersCategory from './filter-cartegory/FiltersCategory'
import CardList from './card-list/CardList'
import CountProducts from './count-products/CountProducts'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory></FiltersCategory>
        <CountProducts></CountProducts>
        <CardList></CardList>
      </div>    
    </div>
  )
}

export default HomePage
