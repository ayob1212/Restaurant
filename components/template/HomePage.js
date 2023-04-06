import Attributes from "components/modules/Attributes";
import Banner from "components/modules/Banner";
import Companies from "components/modules/Companies";
import Definition from "components/modules/Definition";
import Instruction from "components/modules/Instruction";
import Guide from "components/modules/Guide";
import Restrictions from "components/modules/Restrictions";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
