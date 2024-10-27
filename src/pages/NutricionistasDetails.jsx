import { useParams } from "react-router-dom"
import '../css/components/nutricionistasDetails.css'


const NutricionistasDetails = () => {
  const { id } = useParams();

  return (
    <h2 className="padding" > Welcome {id}</h2>
  )
}

export default NutricionistasDetails