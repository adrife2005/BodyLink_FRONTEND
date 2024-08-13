import '../css/components/nutricionistas.css'
import { AiFillStar } from "react-icons/ai";
import NutricionistasButtons from '../components/NutricionistasButtons';
import NutricionistasInput from '../components/NutricionistasInput';
import NutricionistasCard from '../components/NutricionistasCard';


const Nutricionistas = () => {

  const dataNutricionistas = [
    {
      img: "https://picsum.photos/350",
      name: "Ivan Alexei",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      planNutricion: "sneakers",
      planEntrenaminto: "white",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
    {
      img: "https://picsum.photos/350",
      name: "Adrian Felipe",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      planNutricion: "sneakers",
      planEntrenaminto: "red",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
    {
      img: "https://picsum.photos/350",
      name: "Karen Itzel",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      planNutricion: "sneakers",
      planEntrenaminto: "green",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
    {
      img: "https://picsum.photos/350",
      name: "Emiliano Covarrubias",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Adidas",
      planNutricion: "sneakers",
      planEntrenaminto: "black",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
    {
      img: "https://picsum.photos/350",
      name: "Jesus Merlo",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Vans",
      planNutricion: "flats",
      planEntrenaminto: "green",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
    {
      img: "https://picsum.photos/350",
      name: "Marya Guadalupe",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      planNutricion: "flats",
      planEntrenaminto: "black",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
  
    {
      img: "https://picsum.photos/350",
      name: "Roberto Atilano",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Vans",
      planNutricion: "flats",
      planEntrenaminto: "white",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
  
    {
      img: "hhttps://picsum.photos/350",
      name: "Lupita Merlo",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      planNutricion: "sneakers",
      planEntrenaminto: "green",
      star: <AiFillStar className="rating-star" />,
      reviews: "(123 reviews)",
    },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Nike Men's Sneaker",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "200",
    //   company: "Adidas",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "blue",
    // },
  
    // {
    //   img: "https://picsum.photos/350",
    //   name: "PUMA BLACK-OCE",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "150",
    //   company: "Puma",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "green",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Pacer Future Sneaker",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "150",
    //   company: "Puma",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "red",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Unisex-Adult Super",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "150",
    //   company: "Puma",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "black",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Roma Basic Sneaker",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "150",
    //   company: "Puma",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "white",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Pacer Future Doubleknit",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "150",
    //   company: "Puma",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "black",
    // },
  
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Fusion Evo Golf Shoe",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "100",
    //   company: "Puma",
    //   planNutricion: "sneakers",
    //   planEntrenaminto: "green",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Rainbow Chex Skate",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "100",
    //   company: "Vans",
    //   planNutricion: "flats",
    //   planEntrenaminto: "red",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Low-Top Trainers",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "100",
    //   company: "Vans",
    //   planNutricion: "sandals",
    //   planEntrenaminto: "white",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Vans Unisex Low-Top",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "100",
    //   company: "Vans",
    //   planNutricion: "sandals",
    //   planEntrenaminto: "blue",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Classic Bandana Sneakers",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "50",
    //   company: "Nike",
    //   planNutricion: "sandals",
    //   planEntrenaminto: "black",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Chunky High Heel",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "50",
    //   company: "Vans",
    //   planNutricion: "heels",
    //   planEntrenaminto: "black",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "Slip On Stiletto High Heel",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "100",
    //   company: "puma",
    //   planNutricion: "heels",
    //   planEntrenaminto: "black",
    // },
    // {
    //   img: "https://picsum.photos/350",
    //   name: "DREAM PAIRS Court Shoes",
    //   star: <AiFillStar className="rating-star" />,
    //   reviews: "(123 reviews)",
    //   prevPrice: "$140,00",
    //   newPrice: "150",
    //   company: "Nike",
    //   planNutricion: "heels",
    //   planEntrenaminto: "red",
    // }
  ];

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
              <NutricionistasCard/>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Nutricionistas