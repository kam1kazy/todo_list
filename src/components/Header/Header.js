import { NavLink } from "react-router-dom";
import styles from './Header.module.css';


const Header = () => {
   return (
      <div className={styles.header}>
         <ul className={styles.header__list}>
            <li className={styles.header__item}><NavLink to="/">Home</NavLink></li>
            <li className={styles.header__item}><NavLink to="/todolist">ToDo List</NavLink></li>
            <li className={styles.header__item}><NavLink to="/not-found">Not Found</NavLink></li>
         </ul>
      </div>
   );
}

export default Header;