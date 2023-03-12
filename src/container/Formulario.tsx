import AgregarFrase from '../components/AgregarFrase';
import Buscar from '../components/Buscar';


const Formulario = () => {
  
  return (
    <div className='grid grid-cols-2 '>
   <AgregarFrase/>
   <Buscar/>
     
     
    </div>
  )
}

export default Formulario