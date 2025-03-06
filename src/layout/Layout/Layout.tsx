import { Outlet, NavLink } from "react-router";
import styles from "./Layout.module.css";
import avatar from "../../public/avatar.png";
import menuicon from "../../public/menu-icon.svg";
import carticon from "../../public/cart-icon.svg";
import exiticon from "../../public/exit-icon.svg";
import Button from "../../components/Button/Button";
import cn from "classnames";

export function Layout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img
            className={styles["avatar"]}
            src={avatar}
            alt="Аватар пользователя"
          />
          <div className={styles["name"]}>My project</div>
          <div className={styles["email"]}>alaricode@ya.ru</div>
        </div>
        <div className={styles["menu"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src={menuicon} alt="Иконка меню" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: location.pathname === "/cart",
              })
            }
          >
            <img src={carticon} alt="Иконка корзины" />
            Корзина
          </NavLink>
        </div>
        <Button className={styles["exit"]}>
          <img src={exiticon} alt="Иконка выхода" />
          Выход
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
