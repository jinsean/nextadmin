import Image from "next/image";
import styles from "./cur_portfolio.module.css";

const Cur_portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Invested Project</h2>
      <table className={styles.table}>
        {/* Table Head */}
        <thead>
          <tr>
            <td>Project </td>
            <td>Invested Amount</td>
            <td>YTD Earning</td>
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
            <td>MYR 1000</td>
            <td>MYR 60</td>
            <td>
                <div className={styles.buysell}>
                    <span className={`${styles.status} ${styles.buy}`}>
                        Buy
                    </span>
                    <span className={`${styles.status} ${styles.sell}`}>
                        Sell
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
            <td>MYR 1000</td>
            <td>MYR 80</td>
            <td>
                <div className={styles.buysell}>
                    <span className={`${styles.status} ${styles.buy}`}>
                        Buy
                    </span>
                    <span className={`${styles.status} ${styles.sell}`}>
                        Sell
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
            <td>MYR 1000</td>
            <td>MYR 100</td>
            <td>
                <div className={styles.buysell}>
                    <span className={`${styles.status} ${styles.buy}`}>
                        Buy
                    </span>
                    <span className={`${styles.status} ${styles.sell}`}>
                        Sell
                    </span>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cur_portfolio;
