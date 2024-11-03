import { LuSunMedium } from 'react-icons/lu';
import { IoIosNotificationsOutline } from 'react-icons/io';
import '../css/components/header.css';
import Sidebar from './Sidebar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { getToken } from '../assets/confTokens';

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const Header = () => {
  const API_URI =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/user/'
      : 'Nothing here yet';
  const API_URI_PROFESSIONAL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/professional/'
      : 'Nothing here yet';

  const [openForm, setOpenForm] = useState(false);
  const [valuesUpdateUser, setValuesUpdateUser] = useState({
    name: '',
    email: '',
    age: '',
    height: '',
    weight: '',
    profile: '',
    _id: '',
  });

  const [valuesUpdateProfessional, setValuesUpdateProfessional] = useState({
    name: '',
    email: '',
    university: '',
    experience: '',
    profile: '',
    _id: '',
  });

  const [isUser, setIsUser] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('session')) {
      return undefined;
    }

    const fethCredentials = async () => {
      if (localStorage.getItem('auth') === 'true') {
        try {
          const res = await axios.get(API_URI, getToken());
          setValuesUpdateUser(res.data);
        } catch (error) {
          toast.error('Something went wrong when try getting your information');
        }
      } else {
        try {
          const res = await axios.get(API_URI_PROFESSIONAL, getToken());
          setIsUser(false);
          setValuesUpdateProfessional(res.data);
        } catch (error) {
          toast.error('Something went wrong when try getting your information');
        }
      }
    };

    return fethCredentials;
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    if (localStorage.getItem('auth') === 'true') {
      setValuesUpdateUser({ ...valuesUpdateUser, [e.target.name]: base64 });
      await getUserId();
    } else {
      setValuesUpdateProfessional({
        ...valuesUpdateProfessional,
        [e.target.name]: base64,
      });
      await getProfessionalId();
    }
  };

  const updateUserProfile = async (id) => {
    try {
      await axios.put(API_URI + id, valuesUpdateUser, getToken());
      toast.success('Your user was correctly updated');
    } catch (error) {
      toast.error('Something went wrong went you try tu update your info');
    }
  };

  const updateProfessionalProfile = async (id) => {
    try {
      await axios.put(
        API_URI_PROFESSIONAL + id,
        valuesUpdateProfessional,
        getToken()
      );
      toast.success('Your user was correctly updated');
    } catch (error) {
      toast.error('Something went wrong went you try tu update your info');
    }
  };

  const changeTheme = () => {
    document.body.classList.toggle('light__mode');
  };

  const getUserId = async () => {
    await updateUserProfile(valuesUpdateUser._id);
  };

  const getProfessionalId = async () => {
    await updateProfessionalProfile(valuesUpdateProfessional._id);
  };

  const updateUserInfo = async (e) => {
    e.preventDefault();

    await getUserId();
  };

  const updateProfessionalInfo = async (e) => {
    e.preventDefault();

    await getProfessionalId();
  };

  const onChangeUser = (e) => {
    setValuesUpdateUser({
      ...valuesUpdateUser,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeProfessional = (e) => {
    setValuesUpdateProfessional({
      ...valuesUpdateProfessional,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header className='header header__active'>
        <div className='header__container'>
          <div className='header__logo'>
            <img src='./BodyLink.png' alt='' />
          </div>
          <div className='header__profile'>
            <span className='header__profile__theme' onClick={changeTheme}>
              <LuSunMedium />
            </span>
            <span className='header__profile__theme'>
              <IoIosNotificationsOutline />
            </span>
            <span className='header__profile__line'></span>
            {}
            {isUser ? (
              <div className='header__profile__config'>
                <img
                  onClick={() => setOpenForm((prev) => !prev)}
                  src={valuesUpdateUser.profile || './placeholder.webp'}
                  alt='Profile'
                />
                <div
                  className={
                    openForm
                      ? 'form__updateInfo__open'
                      : 'form__updateInfo__close'
                  }
                >
                  <form
                    onSubmit={updateUserInfo}
                    className='form__updateInfo__wrapper'
                  >
                    <div className='form__img__controller'>
                      <img
                        className='form__img__img'
                        src={
                          valuesUpdateUser.profile
                            ? valuesUpdateUser.profile
                            : './placeholder.webp'
                        }
                        alt='Profile'
                      />
                      <label className='form__info__label' htmlFor='infoImg'>
                        {valuesUpdateUser.profile
                          ? 'Actualizar Foto'
                          : 'Agregar Foto de Perfil'}
                      </label>
                      <input
                        id='infoImg'
                        name='profile'
                        type='file'
                        accept='image/*'
                        onChange={(e) => handleFileUpload(e)}
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='name'>
                        Nombre
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        value={valuesUpdateUser.name}
                        onChange={onChangeUser}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={valuesUpdateUser.email}
                        onChange={onChangeUser}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='edad'>
                        Edad
                      </label>
                      <input
                        type='number'
                        id='edad'
                        name='age'
                        value={valuesUpdateUser.age}
                        onChange={onChangeUser}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='altura'>
                        Altura
                      </label>
                      <input
                        type='number'
                        id='altura'
                        name='height'
                        value={valuesUpdateUser.height}
                        onChange={onChangeUser}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='peso'>
                        Peso
                      </label>
                      <input
                        type='number'
                        id='peso'
                        name='weight'
                        value={valuesUpdateUser.weight}
                        onChange={onChangeUser}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <button type='submit' className='btn__update'>
                        Actualizar Datos
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className='header__profile__config'>
                <img
                  onClick={() => setOpenForm((prev) => !prev)}
                  src={valuesUpdateProfessional.profile || './placeholder.webp'}
                  alt='Profile'
                />
                <div
                  className={
                    openForm
                      ? 'form__updateInfo__open'
                      : 'form__updateInfo__close'
                  }
                >
                  <form
                    onSubmit={updateProfessionalInfo}
                    className='form__updateInfo__wrapper'
                  >
                    <div className='form__img__controller'>
                      <img
                        className='form__img__img'
                        src={
                          valuesUpdateProfessional.profile
                            ? valuesUpdateProfessional.profile
                            : './placeholder.webp'
                        }
                        alt='Profile'
                      />
                      <label className='form__info__label' htmlFor='infoImg'>
                        {valuesUpdateProfessional.profile
                          ? 'Actualizar Foto'
                          : 'Agregar Foto de Perfil'}
                      </label>
                      <input
                        id='infoImg'
                        name='profile'
                        type='file'
                        accept='image/*'
                        onChange={(e) => handleFileUpload(e)}
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='name'>
                        Nombre
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        value={valuesUpdateProfessional.name}
                        onChange={onChangeProfessional}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={valuesUpdateProfessional.email}
                        onChange={onChangeProfessional}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <label className='form__info__label' htmlFor='university'>
                        Universidad
                      </label>
                      <input
                        type='text'
                        id='university'
                        name='university'
                        value={valuesUpdateProfessional.university}
                        onChange={onChangeProfessional}
                        autoComplete='off'
                      />
                    </div>
                    <div className='form__info__controller'>
                      <button type='submit' className='btn__update'>
                        Actualizar Datos
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <Sidebar />
    </>
  );
};

export default Header;
