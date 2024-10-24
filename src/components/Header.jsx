import { LuSunMedium } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import '../css/components/header.css'
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getToken } from "../assets/confTokens";

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error)
//     };
//   })
// }

const Header = () => {

  const [openForm, setOpenForm] = useState(false);
  const [valuesUpdate, setValuesUpdate] = useState({
    name: "",
    email: "",
    age: "",
    height: "",
    weight: "",
    profile: "",
    _id: ""
  })

  const API_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/user/' : 'Nothing here yet';

  useEffect(() => {
    const goals = async () => {
      try {
        const res = await axios.get(API_URI, getToken())
        setValuesUpdate(res.data);
      } catch (error) {
        toast.error('Something went wrong when getting the user')
      }
    }

    goals();
  }, [])

  const handleFileUpload = async (e) => {
    const file = e.target.files[0].name;
    // const base64 = await convertToBase64(file);
    setValuesUpdate({ ...valuesUpdate, [e.target.name]: file });
    await getId()
  }


  const updateProfileUser = async (id) => {
    try {
      await axios.put(API_URI + id, valuesUpdate , getToken())
      toast.success('Your user was correctly updated')
    } catch (error) {
      toast.error('Something went wrong went you try tu update your info')
    }
  }


  const changeTheme = () => {
    document.body.classList.toggle('light__mode')
  }

  const getId = async () => {
    await updateProfileUser(valuesUpdate._id);
  }

  const updateUserInfo = async (e) => {
    e.preventDefault()

    await getId()
  }

  const onChange = (e) => {
    setValuesUpdate({ ...valuesUpdate , [e.target.name]: e.target.value});
  }

  return (
    <>
    <header  className="header header__active">
      <div className="header__container">
        <div className="header__logo">
          <img src="./BodyLink.png" alt="" />
        </div>
        <div className="header__profile">
          <span className="header__profile__theme" onClick={changeTheme}>
            <LuSunMedium  />
          </span>
          <span className="header__profile__theme">
            <IoIosNotificationsOutline />
          </span>
          <span className="header__profile__line"></span>
          <div className="header__profile__config">
              <img onClick={() => setOpenForm(prev => !prev)} src={valuesUpdate.profile || "./placeholder.webp"} alt="Profile" />
              <div className={openForm ? "form__updateInfo__open" : "form__updateInfo__close" } >
                <form  onSubmit={updateUserInfo} className="form__updateInfo__wrapper">
                  <div className="form__img__controller">
                    <img className="form__img__img" src={valuesUpdate.profile ? valuesUpdate.profile : "./placeholder.webp"} alt="Profile" />
                    <label className="form__info__label" htmlFor="infoImg">{valuesUpdate.profile ? "Actualizar Foto" : "Agregar Foto de Perfil" }</label>
                    <input id="infoImg" name="profile"  type="file" accept=".jpeg, .png, .jpg" onChange={(e) => handleFileUpload(e)}/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name"  value={valuesUpdate.name} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"  value={valuesUpdate.email} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="edad">Edad</label>
                    <input type="number" id="edad" name="age"  value={valuesUpdate.age} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="altura">Altura</label>
                    <input type="number" id="altura" name="height"  value={valuesUpdate.height} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="peso">Peso</label>
                    <input type="number" id="peso" name="weight"  value={valuesUpdate.weight} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <button  type="submit" className="btn__update">Actualizar Datos</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
      </header>

      <Sidebar/>
    </>
  )
}

export default Header

