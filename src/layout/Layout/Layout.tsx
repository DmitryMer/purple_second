import { Link, Outlet } from "react-router";
import styles from "./Layout.module.css";
import avatar from "../../public/avatar.png";
import menuicon from "../../public/menu-icon.svg";
import carticon from "../../public/cart-icon.svg";
import exiticon from "../../public/exit-icon.svg";
import Button from "../../components/Button/Button";

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
          <Link to="/" className={styles["link"]}>
            <img src={menuicon} alt="Иконка меню" />
            Меню
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src={carticon} alt="Иконка корзины" />
            Корзина
          </Link>
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
