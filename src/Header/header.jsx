import clasess from './header.module.scss'
import { NavLink } from "react-router-dom"
import {Photo} from '../Photo.js'
export default function Header({ onOpenModal1,onOpenModal2 }) {
  const getLinkClass = ({ isActive }) =>`${clasess.navLink} ${isActive ? clasess.active : ""}`;
  return (
    <>
    <header>
            <nav>
                  <img src={Photo.WTwf}/>
               <ul>
            <li><NavLink to="/" className={getLinkClass}>Биржа</NavLink></li>
            <li><NavLink to="/Page2" className={getLinkClass}>Ворки</NavLink></li>
            <li><NavLink to="/Page3" className={getLinkClass}>Конкурсы</NavLink></li>
            <li><NavLink>Создать ворк</NavLink></li>
            <li><NavLink>Создать заказ</NavLink></li>
               </ul>
               <div className={clasess.knopki}>
               <button onClick={onOpenModal2}>Регистрация</button>
               <button onClick={onOpenModal1}>Войти</button>
               </div>
             
            </nav>
        </header>
    </>
  )
}