import '../css/components/nutricionistas.css'
import NutricionistasButtons from '../components/NutricionistasButtons';
import NutricionistasInput from '../components/NutricionistasInput';
import NutricionistasCard from '../components/NutricionistasCard';
import { Link } from 'react-router-dom';


const Nutricionistas = () => {

  const dataProfesional = [
    {
      img: "https://i.pravatar.cc/300",
      name: "Ivan Alexei",
      experiencia: "1",
      // prevPrice: "$140,00",
      planNutricion: "400",
      planEntrenaminto: "100",
      reviews: "123",
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Sergio Ramirez",
      experiencia: "2",
      // prevPrice: "$140,00",
      planNutricion: "500",
      planEntrenaminto: "0",
      reviews: "12",
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Adrian Covarrubias",
      experiencia: "1",
      // prevPrice: "$140,00",
      planNutricion: "300",
      planEntrenaminto: "0",
      reviews: "1",
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Roberto Atilano",
      experiencia: "3",
      // prevPrice: "$140,00",
      planNutricion: "400",
      planEntrenaminto: "100",
      reviews: "13",
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Felipe Covarrubias",
      experiencia: "1",
      // prevPrice: "$140,00",
      planNutricion: "500",
      planEntrenaminto: "300",
      reviews: "53",
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Karen Itzel",
      experiencia: "2",
      // prevPrice: "$140,00",
      planNutricion: "600",
      planEntrenaminto: "300",
      reviews: "11",
    },
  
    {
      img: "https://i.pravatar.cc/300",
      name: "Luis Fernando",
      experiencia: "3",
      // prevPrice: "$140,00",
      planNutricion: "500",
      planEntrenaminto: "100",
      reviews: "16",
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Rodrigo Velasquez",
      experiencia: "2",
      // prevPrice: "$140,00",
      planNutricion: "300",
      planEntrenaminto: "200",
      reviews: "12",
    },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Nike Men's Sneaker",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   price: "200",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "PUMA BLACK-OCE",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Pacer Future Sneaker",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Unisex-Adult Super",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Roma Basic Sneaker",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Pacer Future Doubleknit",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
  
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Fusion Evo Golf Shoe",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "100",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Rainbow Chex Skate",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "100",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Low-Top Trainers",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "100",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Vans Unisex Low-Top",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "100",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Classic Bandana Sneakers",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "50",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Chunky High Heel",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "50",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Slip On Stiletto High Heel",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "100",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "DREAM PAIRS Court Shoes",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Nike Air Vapormax Plus",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "200",
    // },
  
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Low Mid Block Heels",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "200",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Chunky High Heel",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "50",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Amore Fashion Stilettos",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "150",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Bridal Sandals Glitter",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "50",
    // },
    // {
    //   img: "https://i.pravatar.cc/300",
    //   name: "Wedding Prom Bridal",
    //   reviews: "123",
      // prevPrice: "$140,00",
    //   newPrice: "50",
    // },
  ]

  return (
    <main>
      <section className="nutricionistas">
        <div className="nutricionista__container">
          <div className="nutricionistas__sort">
              <div className="nutricionistas__sort__search">
              <h2>Categorias</h2>
                <NutricionistasInput/>
               </div>
              <div className="nutricionistas__sort__buttons">
                <NutricionistasButtons/>
              </div>
            </div>
          <div className="nutricionistas__profesionals">
            {dataProfesional.map((data, indx) => (
              <Link key={indx} to={`/nutricionistas/${indx}`}>
                <NutricionistasCard  data={data}/>
              </Link>
            ))}
            </div>
        </div>
      </section>
    </main>
  )
}

export default Nutricionistas