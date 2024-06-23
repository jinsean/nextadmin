import styles from "./cardProject.module.css";
import Image from "next/image";


const CardProject = ({ item }) => {
  return (
    <div className={styles.container}>
        <Image
        src={item.img}
        alt=""
        width={1000}
        height={1000}
        className={styles.userImage}
        />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.roi}>Annual Expected ROI: {item.roi}</span>
        <span className={styles.noi}>Number of Investors: {item.noi}</span>
        <span className={styles.toi}>Total Expected Investment: {item.toi}</span>
      </div>
      <div className={styles.buttoncontainer}> {/* Add a container for the buttons */}
        <button className={styles.button}>
          Learn More
        </button>
        <button className={`${styles.button} ${styles.invest}`}>
          Invest
        </button>
      </div>
    </div>
  );
};

export default CardProject;
