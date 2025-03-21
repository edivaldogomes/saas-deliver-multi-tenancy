import { Banner } from "@/components/Banner";
import { ProductItem } from "@/components/ProductItem";
import { SearchInput } from "@/components/SearchInput";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja bem vindo (a) 👋🏾</div>
            <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#Fb9400" onSearch={handleSearch} />
        </div>
      </header>
      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/burger.png",
            name: "Texas burguer",
            categoryName: "Carnes",
            price: "12,50",
          }}
          mainColor="#Fb9400"
          secondaryColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger.png",
            name: "Texas burguer",
            categoryName: "Vegano",
            price: "12,50",
          }}
          mainColor="#Fb9400"
          secondaryColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/burger.png",
            name: "Texas burguer",
            categoryName: "Tradicional",
            price: "12,50",
          }}
          mainColor="#Fb9400"
          secondaryColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 4,
            image: "/tmp/burger.png",
            name: "Texas burguer",
            categoryName: "Tradicional",
            price: "12,50",
          }}
          mainColor="#Fb9400"
          secondaryColor="#FFF9F2"
        />
        <ProductItem
          data={{
            id: 5,
            image: "/tmp/burger.png",
            name: "Texas burguer",
            categoryName: "Tradicional",
            price: "12,50",
          }}
          mainColor="#Fb9400"
          secondaryColor="#FFF9F2"
        />
      </div>
    </div>
  );
};

export default Home;
