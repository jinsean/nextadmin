import Marketplace_table from "@/app/ui/dashboard/marketplace_table/marketplace_table";
import styles from "../../ui/dashboard/marketplace/marketplace.module.css";

const Marketplace = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Marketplace_table/>
      </div>
    </div>
  )
}

export default Marketplace
