import clsx from "clsx";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.footerContent}>
          <ul className={clsx(styles.footerColumn, styles.footerNav)}>
            <li>
              <a href="#" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">E-Learning for Care</a>
            </li>
            <li>
              <a href="#">HR made for Care</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul className={clsx(styles.footerColumn, styles.address)}>
            <li>
              <strong>Correct Care Training Ltd</strong>
            </li>
            <li>
              <p>Hurst Court</p>
            </li>
            <li>
              <p>Nook Lane</p>
            </li>
            <li>
              <p>Ashton Under Lyne</p>
            </li>
            <li>
              <p>OL6 9HN</p>
            </li>
            <img
              loading="lazy"
              src="https://correctcare.co.uk/wp-content/uploads/2025/01/email-footer-skills-for-care-cpd-2025.png"
              alt="Skills for Care & CPD Logos"
              width="262.5"
              height="65.63"
            />
          </ul>
          <div></div>
          <div className={styles.footerColumn}>
            <h6 className={styles.footerHeading}>
              Training, E-Learing, Policies and HR for the care industry
            </h6>
            <img
              src="https://correctcare.co.uk/wp-content/uploads/2024/02/endorsed-provider-2-small.png"
              alt="Skills for Care Endorsed Provider Logo"
              width="262.5"
              height="116.5"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <a href="#" className={styles.footerBottomText}>
            Correct Care, eLearning for the care industry.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
