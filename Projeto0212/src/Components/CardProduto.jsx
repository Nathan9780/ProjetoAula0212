import React from 'react'
import '/src/CSS/cardproduto.css'
function CardProduto() {
  return (
    <div className="card-product">
      <img src="https://a-static.mlcdn.com.br/280x210/console-sony-playstation-5-com-leitor-de-discos-ssd-1tb-controle-sem-fio-dualsense-2-jogos/kabum/934759/cb0fe0a51be50ebc072319a772f389a3.jpeg" alt="" className="card-image"/>
      <h3 className="card-title">Produtos Selecionados</h3>
      <span className="card-price">R$ 19.99</span>
      <button className="card-button">Comprar</button>
    </div>
    
  )
}

export default CardProduto
