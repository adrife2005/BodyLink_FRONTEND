import { LuSunMedium } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import '../css/components/header.css'
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [openForm, setOpenForm] = useState(false);
  const [profileImg, setProfileImg] = useState('');
  const [valuesUpdate, setValuesUpdate] = useState({
    name: "",
    email: "",
    edad: "",
    altura: "",
    peso: ""
  })

  const changeTheme = () => {
    document.body.classList.toggle('light__mode')
  }

  const updateUserInfo = (e) => {
    e.preventDefault()
    console.log(valuesUpdate);
    console.log("info updated");
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
          <div  className="header__profile__config">
              <img onClick={() => setOpenForm(prev => !prev)} src={profileImg ? profileImg : "./placeholder.webp"} alt="Profile" />
              <div className={openForm ? "form__updateInfo__open" : "form__updateInfo__close" } >
                <form  onSubmit={updateUserInfo} className="form__updateInfo__wrapper">
                  <div className="form__img__controller">
                    <img className="form__img__img" src={profileImg ? profileImg : "./placeholder.webp"} alt="Profile" />
                    <label className="form__info__label" htmlFor="infoImg">{profileImg ? "Actualizar Foto" : "Agregar Foto de Perfil" }</label>
                    <input id="infoImg"  type="file" onChange={(e) => setProfileImg(e.target.files[0].name)}/>
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
                    <input type="number" id="edad" name="edad"  value={valuesUpdate.edad} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="altura">Altura</label>
                    <input type="number" id="altura" name="altura"  value={valuesUpdate.altura} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <label className="form__info__label" htmlFor="peso">Peso</label>
                    <input type="number" id="peso" name="peso"  value={valuesUpdate.peso} onChange={onChange} autoComplete="off"/>
                  </div>
                  <div className="form__info__controller">
                    <button type="submit" className="btn__update">Actualizar Datos</button>
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

