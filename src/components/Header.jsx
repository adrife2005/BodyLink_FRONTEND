import { LuSunMedium } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import '../css/components/header.css'
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="./BodyLink.png" alt="" />
        </div>
        <div className="header__profile">
          <span className="header__profile__theme">
            <LuSunMedium  />
          </span>
          <span className="header__profile__theme">
          <IoIosNotificationsOutline />
          </span>
          <span className="header__profile__line"></span>
          <div className="header__profile__config">
            <img src="./meFace.jpg" alt="Profile" />
          </div>
        </div>
      </div>
      </header>

      <Sidebar/>
    </>
  )
}

export default Header