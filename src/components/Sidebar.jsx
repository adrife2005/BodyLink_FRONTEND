import '../css/components/sidebar.css'
import { NavLink } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineFoodBank } from "react-icons/md";
import { RiWeightLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";



const Sidebar = () => {

  const linkClass = ({ isActive }) => (
    !isActive
    ? 'sidebar__home__container'
      : 'sidebar__home__container sidebar__home__container__active')
  
  const deleteUser = () => {
    console.log("Deleted..");
  }

  return (
    <header className='sidebar'>
      <div className="sidebar__container">
        <div className="sidebar__home">
          <NavLink className={linkClass} to='/' >
              <GoHome className='sidebar__icon' />
              <span className='sidebar__text'>Home</span>
          </NavLink>
          <NavLink className={linkClass} to='/personal'>
            <IoPersonOutline className='sidebar__icon'/>
            <span className='sidebar__text'>Tu Nutricionista</span>
          </NavLink>
        </div>
        <div className="sidebar__comunidad">
        <NavLink className={linkClass} to='/nutricionistas' >
            <SlPeople className='sidebar__icon'/>
            <span className='sidebar__text'>Nutricionistas</span>
          </NavLink>
         <NavLink className={linkClass} to='/comunidad' >
            <BsPersonVcard className='sidebar__icon' />
            <span className='sidebar__text'>Comunidad</span>
          </NavLink>
          <NavLink className={linkClass} to='/dietas' >
            <MdOutlineFoodBank className='sidebar__icon' />
            <span className='sidebar__text'>Dietas</span>
          </NavLink>
          <NavLink className={linkClass} to='/ejercisios' >
            <RiWeightLine className='sidebar__icon' />
            <span className='sidebar__text'>Ejercisios</span>
          </NavLink>
        </div>
        <div className="sidebar__logout">
          <NavLink className={linkClass} to='/auth/user' onClick={deleteUser} >
            <IoLogOutOutline className='sidebar__icon'/>
            <span className='sidebar__text'>Log Out</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Sidebar