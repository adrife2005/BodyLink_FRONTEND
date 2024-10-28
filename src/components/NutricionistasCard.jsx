import '../css/components/nutricionistascard.css'
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoNutritionOutline } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";



const NutricionistasCard = ({ data }) => {

  return (
  <>
    {
      <div className='nutricionistas__card'>
        <div className="nutricionista__card__img">
          <img src={data.profile} alt="Profesional" />
        </div>
        <div className="nutricionista__card__title">
            <span>{data.name}</span>
        </div>
        <div className="nutricionista__card__conf">
          <div className="nutriconista__card__configuration">
            <MdOutlineWorkOutline  className='nutriconista__card__configuration__icon'/>
              <p>Experiencia - <span className='nutriconista__card__configuration__years'>{data.experience} {data.experience <= 1 ? 'año' : 'años' }</span></p>
          </div>
          <div className="nutriconista__card__configuration">
            <IoNutritionOutline  className='nutriconista__card__configuration__icon'/>
              <p> Plan de nutrición: <span className='nutriconista__card__configuration__years'>$100</span></p>
          </div>
          <div className="nutriconista__card__configuration">
            <IoMdFitness  className='nutriconista__card__configuration__icon'/>
              <p> Plan de entrenamiento: <span className='nutriconista__card__configuration__years'>$200</span></p>
          </div>
          <div className="nutriconista__card__configuration">
            <div className="nutricionista__card__estrellas">
              <AiFillStar className='nutriconista__card__configuration__icon' />
              <AiFillStar className='nutriconista__card__configuration__icon' />
              <AiFillStar className='nutriconista__card__configuration__icon' />
              <AiFillStar className='nutriconista__card__configuration__icon' />
            </div>
              <p className='nutricionista__card__reviews__count'> 300 <span className='nutriconista__card__configuration__years'>Reviews</span></p>
        </div>
        </div>
      </div >
      }
      </>
  )
}

export default NutricionistasCard