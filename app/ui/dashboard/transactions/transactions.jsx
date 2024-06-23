import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Project Update</h2>
      <table className={styles.table}>
        {/* Table Head */}
        <thead>
          <tr>
            <td>Project</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount Raised</td>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          <tr>
            <td>
              <div className={styles.project}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                10Mp Kota Sarang Semut LSS Farm
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.funding}`}>
                funding
              </span>
            </td>
            <td>14.02.2024</td>
            <td>MYR 3.1 Mil</td>
          </tr>
          <tr>
            <td>
              <div className={styles.project}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                2 - 22KWh Charging Station
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.review}`}>
                Under Review
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$MYR 100 K</td>
          </tr>
          <tr>
            <td>
              <div className={styles.project}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                80KWh Super Charger Gurun R&R
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.construction}`}>
                Under Construction
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.project}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Muar 1Mp Residential Area
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>MYR 45K</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
