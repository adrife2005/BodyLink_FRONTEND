import '../css/components/nutricionistas.css';
import NutricionistasButtons from '../components/NutricionistasButtons';
import NutricionistasInput from '../components/NutricionistasInput';
import NutricionistasCard from '../components/NutricionistasCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Nutricionistas = () => {
  const [professional, setProfessional] = useState([]);

  const API_URI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/professional/all'
      : 'Nothing here yet';

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const res = await axios.get(API_URI);
        setProfessional(res.data);
      } catch (error) {
        toast.error(
          'Something went wrong when we try to get the professionals information'
        );
      }
    };
    return fetchProfessionals;
  }, []);

  return (
    <main>
      <section className='nutricionistas'>
        <div className='nutricionista__container'>
          <div className='nutricionistas__sort'>
            <div className='nutricionistas__sort__search'>
              <h2>Categorias</h2>
              <NutricionistasInput />
            </div>
            <div className='nutricionistas__sort__buttons'>
              <NutricionistasButtons />
            </div>
          </div>
          <div className='nutricionistas__profesionals'>
            {professional.length > 0
              ? professional.map((data, indx) => (
                  <Link key={indx} to={`/nutricionistas/${data._id}`}>
                    <NutricionistasCard data={data} />
                  </Link>
                ))
              : 'Theres no professionals yet'}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nutricionistas;
