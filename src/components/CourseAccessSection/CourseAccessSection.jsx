import clsx from "clsx";
import styles from "./CourseAccessSection.module.scss";

const CourseAccessSection = () => {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.container)}>
        <div className={styles.textBlock}>
          <h2>Easy to access, easy to use</h2>
          <p className={styles.text}>
            All courses can taken from mobiles, tablets and computers, meaning
            your staff can train whenever and wherever they can. Managers can
            assign courses to employees with just a few clicks.
          </p>
          <hr className={styles.shortHr} />
          <p className={styles.updatedInfo}>
            <span className="label labelInline">Updated</span>
            Courses are updated regularly for accuracy and as legislation
            changes.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img
            src="https://correctcare.co.uk/wp-content/uploads/2020/06/ipadcc.png"
            alt="iPad showing Course"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseAccessSection;
