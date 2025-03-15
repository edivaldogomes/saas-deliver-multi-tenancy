import styles from "@/styles/SearchInput.module.css";
import { useState } from "react";

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ mainColor, onSearch }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputFocus = () => {
    setFocused(true);
  };

  const habndleInputBlur = () => {
    setFocused(false);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  };
  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? mainColor : "#fff" }}
    >
      <div
        className={styles.button}
        onClick={() => onSearch(searchValue)}
      ></div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do producto"
        onFocus={() => handleInputFocus()}
        onBlur={() => habndleInputBlur()}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
