import styles from "./pagination.module.css";

import React from 'react'

const Pagination = () => {

    return (
        <div className={styles.container}>
          <button
            className={styles.button}
          >
            Previous
          </button>
          <button
            className={styles.button}
          >
            Next
          </button>
        </div>
      );
    };

export default Pagination
