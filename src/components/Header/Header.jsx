import clsx from "clsx";
import styles from "./Header.module.scss";

const Header = ({ initial = false, isSticky = false }) => {
  return (
    <header
      className={clsx(
        styles.siteHeader,
        isSticky && styles.sticky,
        !initial && styles.animated
      )}
    >
      <div className={clsx("container", styles.headerContainer)}>
        <a href="#" className={styles.logo}>
          <img
            src="https://correctcare.co.uk/wp-content/uploads/2025/01/logo-text-web.png"
            alt="Correct Care Logo"
            height={40}
          />
        </a>
        <nav className={styles.mainNavigation}>
          <ul>
            <li>
              <a href="#" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Tour
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Courses
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                HR
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Policies
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Book a Demo
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a className={styles.signInButton} href="#" target="_blank">
          Sign In to Correct Care
        </a>
      </div>
    </header>
  );
};

export default Header;
