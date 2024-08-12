import '../css/components/nutricionistasbutton.css'


const NutricionistasButtons = () => {
  return (
    <div className='nutricionistas__sort__buttons'>
      <button className="nutricionistas__sort__conf">Todos los Nutricionistas</button>
      <button className="nutricionistas__sort__conf">
        <span>Años de experiencia</span>
        <div className="nutricionistas__experiencia__menu">
          <button className="nutrionistas__experiencia__menu__buttons">+1</button>
          <button className="nutrionistas__experiencia__menu__buttons">+2</button>
          <button className="nutrionistas__experiencia__menu__buttons">+3</button>
          <button className="nutrionistas__experiencia__menu__buttons">+4</button>
          <button className="nutrionistas__experiencia__menu__buttons">+5</button>
        </div>
      </button>
      <button className="nutricionistas__sort__conf">Mejores Calificaciones</button>
      <button className="nutricionistas__sort__conf">
        <span>Precio de la consulta</span>
        <div className="nutricionistas__costo__menu">
          <button className="nutricionistas__costo__menu__buttons">$0 - $99</button>
          <button className="nutricionistas__costo__menu__buttons">$100 - $199</button>
          <button className="nutricionistas__costo__menu__buttons">$200 - $299</button>
          <button className="nutricionistas__costo__menu__buttons">$300 - $399</button>
          <button className="nutricionistas__costo__menu__buttons">$400 - $499</button>
          <button className="nutricionistas__costo__menu__buttons">$500 o más</button>
        </div>
      </button>
    </div>
  )
}

export default NutricionistasButtons