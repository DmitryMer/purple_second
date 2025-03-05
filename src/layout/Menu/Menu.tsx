import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/info">Инфо</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
