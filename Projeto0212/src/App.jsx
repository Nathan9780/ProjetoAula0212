
import '../src/CSS/global.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PageContato from './Components/PageContato'
import PageInicio from './Components/PageInicio'
import PageProdutos from './Components/PageProdutos'
import PageSobre from './Components/PageSobre'

function App() {
  return (
    <div>
    <header>
      <Header />
      </header>
    
    <main>
    <PageInicio />
    <PageProdutos />
    <PageSobre />
    <PageContato />
    </main>

<footer>
<Footer />
</footer>
</div>
  )
}

export default App
