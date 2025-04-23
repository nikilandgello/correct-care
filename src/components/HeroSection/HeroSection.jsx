import clsx from "clsx";
import styles from "./HeroSection.module.scss";
import { motion } from "framer-motion";

const HeroSection = ({ ref }) => {
  return (
    <section ref={ref} className={styles.heroSection}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { ease: "easeOut", duration: 2, delay: 0.6 },
            }}
          >
            <h1>
              Transform your Care Training & Policy Compliance from Reactive to
              Proactive.
            </h1>
            <h4>
              For Care Homes, Nursing Homes and Domiciliary Care Providers.
            </h4>
          </motion.div>
          <div className={styles.heroActions}>
            <a href="#" className={styles.btnCall}>
              Call 0333 090 7092
            </a>
            <a href="#" className={styles.btnRequest}>
              Request a Demo
            </a>
          </div>
          <img
            src="https://correctcare.co.uk/wp-content/uploads/2024/02/skills-for-care-endorsed-cpd-member-300x96.png"
            alt="Skills for Care Endorsed CPD Member"
            width="300"
            height="96"
          />
        </div>
        <div className={styles.heroImage}>
          <figure>
            <img
              src="https://correctcare.co.uk/wp-content/uploads/2023/10/care-worker-2.png"
              alt="Care Worker in Uniform"
              width="668"
              height="1068"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
