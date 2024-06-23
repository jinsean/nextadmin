import { cardsPortfolio } from "../../lib/data";
import styles from "../../ui/dashboard/portfolio/portfolio.module.css";
import CardPortfolio from "../../ui/dashboard/cardPortfolio/cardPortfolio";
import Cur_portfolio from "../../ui/dashboard/cur_portfolio/cur_portfolio";

const Portfolio = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cardsPortfolio.map((item) => (
            <CardPortfolio item={item} key={item.id} />
          ))}
        </div>
        <Cur_portfolio />
      </div>
    </div>
  )
}

export default Portfolio
