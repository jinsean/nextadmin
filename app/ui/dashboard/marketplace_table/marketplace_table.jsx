import Image from "next/image";
import styles from "./marketplace_table.module.css";

const Marketplace_table = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Completed Project To Let Go</h2>
      <table className={styles.table}>
        {/* Table Head */}
        <thead>
          <tr>
            <td>Project </td>
            <td>Initial Capital Per Share</td>
            <td>Price Per Share</td>
            <td>ROI(%)</td>
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
            <td>MYR 900</td>
            <td>MYR 1000</td>
            <td>10</td>
            <td>
                <div className={styles.buysell}>
                    <span className={`${styles.status} ${styles.buy}`}>
                        Buy
                    </span>
                </div>
            </td>
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
            <td>MYR 900</td>
            <td>MYR 1100</td>
            <td>13</td>
            <td>
                <div className={styles.buysell}>
                    <span className={`${styles.status} ${styles.buy}`}>
                        Buy
                    </span>
                </div>
            </td>
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
            <td>MYR 850</td>
            <td>MYR 1000</td>
            <td>12</td>
            <td>
                <div className={styles.buysell}>
                    <span className={`${styles.status} ${styles.buy}`}>
                        Buy
                    </span>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marketplace_table;
