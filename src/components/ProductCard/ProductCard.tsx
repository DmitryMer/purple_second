import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import cartButtonIcon from "../../public/cart-button-icon.svg";
import starIcon from "../../public/star-icon.svg";
import { Link } from "react-router";

function ProductCard(props: ProductCardProps) {
  return (
    <Link to={"/"} className={styles["link"]}>
      <div className={styles["card"]}>
        <div
          className={styles["head"]}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className={styles["price"]}>
            {props.price}&nbsp;
            <span className={styles["currency"]}>₽</span>
          </div>
          <button className={styles["add-to-cart"]}>
            <img src={cartButtonIcon} alt="Добавить в корзину" />
          </button>
          <div className={styles["rating"]}>
            {props.rating}&nbsp;
            <img src={starIcon} alt="Иконка звезды" />
          </div>
        </div>
        <div className={styles["footer"]}>
          <div className={styles["title"]}>{props.title}</div>
          <div className={styles["description"]}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
