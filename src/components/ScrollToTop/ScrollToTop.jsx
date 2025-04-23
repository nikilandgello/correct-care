import styles from "./ScrollToTop.module.scss";
import { ArrowUp } from "lucide-react"; // або будь-який інший іконпак

const ScrollToTop = ({ visible }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.scrollToTop} ${visible ? styles.visible : ""}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
