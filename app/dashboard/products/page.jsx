import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css"
import Link from "next/link";
import Image from "next/image";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      {/* Table header */}
      <div className={styles.top}>
        <Search placeholder="Search for a products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      {/* Table Content */}
      <table className={styles.table}>
        {/* Table Head */}
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          <td>
            <div className={styles.product}>
              <Image
                src={"/noproduct.jpg"}
                alt=""
                width={40}
                height={40}
                className={styles.productImage}
              />
              Iphone
            </div>            
          </td>
          <td>Desc</td>
          <td>2499</td>
          <td>USA</td>
          <td>999</td>
          <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/products/view/`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage
