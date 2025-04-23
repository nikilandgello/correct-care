import clsx from "clsx";
import styles from "./FeaturesSection.module.scss";

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={clsx("container", styles.featuresContainer)}>
        <ul className={styles.featuresList}>
          <li className={styles.featureItem}>
            <span className={clsx(styles.featureNumber, styles.numberOne)}>
              1
            </span>
            <h3>Staff Training</h3>
            <p>
              Your employees can access all the courses all the time. You can
              keep track of employees and ensure they are up to date.
            </p>
          </li>
          <li className={styles.featureItem}>
            <span className={clsx(styles.featureNumber, styles.numberTwo)}>
              2
            </span>
            <h3>Policies</h3>
            <p>
              Assign company policies to employees and keep track of who has
              signed them and who hasn’t.
            </p>
          </li>
          <li className={styles.featureItem}>
            <span className={clsx(styles.featureNumber, styles.numberTree)}>
              3
            </span>
            <h3>Inductions</h3>
            <p>
              Do your employees receive an induction? Ensure all documents are
              received and all people spoken to and instructions given. Managers
              can track the induction process.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
