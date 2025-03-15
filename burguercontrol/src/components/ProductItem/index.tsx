import Link from "next/link";
import { Product } from "../../../types/Product";
import styles from "./styles.module.css";

type props = {
  data: Product;
  mainColor: string;
  secondaryColor: string;
};

export const ProductItem = ({ data, mainColor, secondaryColor }: props) => {
  return (
    <Link href={`/product/${data.id}`} className={styles.container}>
      <div
        className={styles.head}
        style={{ backgroundColor: secondaryColor }}
      ></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={data.image} alt="Burguer Image" />
        </div>
        <div className={styles.catName}>{data.categoryName}</div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price} style={{ color: mainColor }}>
          {data.price} €
        </div>
      </div>
    </Link>
  );
};
