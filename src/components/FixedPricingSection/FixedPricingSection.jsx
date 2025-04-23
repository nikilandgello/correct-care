import styles from "./FixedPricingSection.module.scss";

const FixedPricingSection = () => {
  return (
    <section className={styles.fixedPricingSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Fixed Pricing</h2>
        <div className={styles.contentContainer}>
          <div className={styles.textBlock}>
            <p>
              With Correct Care you don’t pay per named employee, this means
              when an employee leaves the company you have an empty slot, so
              when a new employees starts they occupy that empty slot. There’s
              no need to contact us, there is no additional expense.
            </p>
            <p>
              With other training providers you are paying per named employee,
              so you have spent money training someone who has left and you need
              to spend more to train the new employee. You also have the
              inconvenience of contacting the training company to add the new
              employee(s) resulting in additional cost.
            </p>
            <p>
              Have you previously paid for employee training only to find they
              don’t show up for work the next week? With Correct Care this isn’t
              a problem.
            </p>
          </div>
          <img
            src="https://correctcare.co.uk/wp-content/uploads/2020/07/LicensingWoman.png"
            alt="Illustration about licensing"
            width="555"
            height="293"
          />
        </div>
      </div>
    </section>
  );
};

export default FixedPricingSection;
