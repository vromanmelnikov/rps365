import styles from "./layout.module.scss";
import MainStyles from "../../styles/Main.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children }) {
  return (
      <div className={styles.main}>
        <Header />
        <div className={MainStyles.container}>{children}</div>
        <Footer />
      </div>
  );
}
