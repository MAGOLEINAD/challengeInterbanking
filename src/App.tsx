import Formulario from './container/Formulario'
import Header from './components/Header'
import Grilla from './container/Grilla'
import { ContextProvider } from './context/Provider'

function App() {


  return (
    <>
     <ContextProvider>
     <Header/>
     <Formulario/>
     <Grilla/>
     </ContextProvider>
    </>
  )
}

export default App


