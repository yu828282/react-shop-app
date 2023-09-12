import React from 'react'
import styles from './CategoryTab.module.scss'
import { useActionData } from 'react-router-dom'
import { setActiveCategory } from '../../../../stores/categories/categories.slice'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector, useAppdispatch } from '../../../../hooks/redux'

const CategoryTab = ({text, categoryName}) => {

  // const category = useSelector((state) => state.categoriesSlice); // useSelector로 초기 상태값을 등록
  // const dispach = useDispatch() // useDispatch로 액션을 발생시켜서 상태값을 변경
  const dispach = useAppdispatch()
  const category = useAppSelector((state) => state.categoriesSlice);

  console.log(category);

  const getActiveCategory = () => { dispach(setActiveCategory(categoryName)) }

  return (
    <button className={
      categoryName === category ? styles.active_category : styles.category_button
      }
      onClick={getActiveCategory}
    >{text}</button>
  )
}

export default CategoryTab
