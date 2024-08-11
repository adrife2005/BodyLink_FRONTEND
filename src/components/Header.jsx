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

  const updateUserInfo = () => {
    console.log("info updated");
  }

  const onChange = (e) => {
    setValuesUpdate({ ...valuesUpdate , [e.target.name]: e.target.value});
  }


  return (
    <>
    <header className="header">
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
              <img onClick={() => setOpenForm(prev => !prev)} src="./placeholder.webp" alt="Profile" />
              <div className={openForm ? "form__updateInfo__open" : "form__updateInfo__close" } >
                <form  onSubmit={updateUserInfo}>
                  <div className="form__updateIngo__controller">
                    <img src="./placeholder.webp" alt="Profile" />
                    <label className="form__updateIngo__label" htmlFor="infoImg">Agregar foto de perfil</label>
                    <input id="infoImg"  type="image" accept="image/png, image/jpg" value={profileImg} onChange={(e) => setProfileImg(e.target.value)}/>
                  </div>
                  <div className="form__updateIngo__controller">
                    <label className="form__updateIngo__label" htmlFor="name">Nombre Completo</label>
                    <input type="text" name="name" id="name"  value={valuesUpdate.name} onChange={onChange}/>
                  </div>
                  <div className="form__updateIngo__controller">
                    <label className="form__updateIngo__label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"  value={valuesUpdate.email} onChange={onChange}/>
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

