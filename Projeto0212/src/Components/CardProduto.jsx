import React from 'react'
import '/src/CSS/cardproduto.css'
function CardProduto() {
  return (
    <div>
    <div className="card-product">
      <img src="https://a-static.mlcdn.com.br/280x210/console-sony-playstation-5-com-leitor-de-discos-ssd-1tb-controle-sem-fio-dualsense-2-jogos/kabum/934759/cb0fe0a51be50ebc072319a772f389a3.jpeg" alt="" className="card-image"/>
      <h3 className="card-title">Produtos Selecionados</h3>
      <span className="card-price">R$ 19.99</span>
      <button className="card-button">Comprar</button>
    </div>
    
    <div className='card-product'>
      <img src="https://images-cdn.ubuy.co.in/68be6734f65fe8810c0b78e0-newest-microsoft-xbox-series-x-gaming.jpg" alt="" className="card-image"/>
      <h3 className="card-title">Produtos Selecionados</h3>
      <span className="card-price">R$ 25.99</span>
      <button className="card-button">Comprar</button>
    </div>

    <div className='card-product'>
      <img src="https://s2-oglobo.glbimg.com/9JBjcUf6PBbR9FzRyRMOU2PUgjQ=/0x0:960x960/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/R/W/6Hz3HxSrOuj58V4v28Ug/960x0.webp" alt="" className="card-image"/>
      <h3 className="card-title">Produtos Selecionados</h3>
      <span className="card-price">R$ 3599.99</span>
      <button className="card-button">Comprar</button>
    </div>
    </div>
  )
}

export default CardProduto
