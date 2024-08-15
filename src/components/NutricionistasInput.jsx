import { useState } from 'react'
import '../css/components/nutricionistasinput.css'
import '../css/components/nutricionistasinput.css'
import { IoSearchOutline } from "react-icons/io5";



const NutricionistasInput = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="nutricionistas__input__search">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} autoComplete='off' placeholder='Busca tu entrenador'/>
      <div className="nutricionistas__input__wrapper">
        <IoSearchOutline className='nutricionistas__input__icon' />
      </div>
    </div>
  )
}

export default NutricionistasInput