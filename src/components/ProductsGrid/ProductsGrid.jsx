import React from 'react'
import { useGetProductsQuery } from '../../store/productsApi'
import  ProductsCard from '../ProductsCard/ProductsCard'
import { useSelector } from 'react-redux'
import { getCategory } from '../../store/selectors'
import { getSpice, getNuts, getVegetarian } from '../../store/selectors'


const ProductsGrid = () => {
  const spice = useSelector(getSpice)
  const nuts = useSelector(getNuts);
  const vegetarian = useSelector(getVegetarian);
  const category = useSelector(getCategory);
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetProductsQuery();

  let content;

  const filteredProducts = (products) => {
    return products.filter(item => {
      if (category === 'All') {
        return item
      } else if(item.category === category) {
        return item
      }
      return null;
    })
  }
  const filterSpicedProducts = (filteredProducts) => {
    return filteredProducts.filter(item => item.spiciness >= spice);
  }
  const filteredNutsVege = (filteredProducts) => {
    return filteredProducts.filter(item => {
      if (item.vegetarian === vegetarian) {
        return item
      }
      if (item.nuts === nuts) {
        return item
      }
      return null;
    })
  }
  const finalFilteredProducts = filteredNutsVege(filterSpicedProducts(filteredProducts(products)));

  if (isLoading) {
    content = <p>Loading...</p>
  } else if(isSuccess) {
    content = finalFilteredProducts.map(product => {
      return (
        <ProductsCard
          key={product.id}
          {...product}
        />
      )
    })

  } else if(isError) {
    content = <p>{error}</p>
  }

  return (
    <div className="container">
      <div className="products-grid">
        <div className="products-grid__inner">
          {content}
        </div>
      </div>
    </div>
  )
}

export default ProductsGrid