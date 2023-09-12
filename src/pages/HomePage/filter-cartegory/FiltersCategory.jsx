import React from 'react'
import styles from './FilterCategory.module.scss'
import CategoryTab from './category-tab/CategoryTab'
import { CategoriesName } from '../../../stores/categories/categories.type';

const FiltersCategory = () => {
  return (
    <div className={styles.filter_category}>
      <CategoryTab text = {'모두'} categoryName={CategoriesName.All}></CategoryTab>
      <CategoryTab text = {'전자기기'} categoryName={CategoriesName.Electronics}></CategoryTab>
      <CategoryTab text = {'쥬얼리'} categoryName={CategoriesName.Jewelry}></CategoryTab>
      <CategoryTab text = {'남성의류'} categoryName={CategoriesName.MensClothing}></CategoryTab>
      <CategoryTab text = {'여성의류'} categoryName={CategoriesName.WomensClothing}></CategoryTab>
    </div>
  )
}

export default FiltersCategory
