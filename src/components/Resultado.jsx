import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants'

const  Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos

    console.log(MARCAS)

    if(resultado === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">
             Resumen
        </h2>

        <p className="my-2">
            <span className="font-bold">Marca: </span>
            {marca}

        </p>
    </div>
  )
}

export default Resultado
