import React from 'react'
import CardProduto from './CardProduto'
import '/src/CSS/pageproduto.css'
function PageProdutos() {
  return (
    <div id='Produtos' className='page-container'>
        <h2 className='section-title-center'>Catálogo de Produtos:</h2>
      <div className='card-list-container'>
        <CardProduto />
        <CardProduto />
  
  

      </div>
    </div>
  )
}

export default PageProdutos
