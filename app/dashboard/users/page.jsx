import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import { fetchUsers } from "@/app/lib/data";

const UsersPage = async() => {
  
  const users = await fetchUsers();
    console.log(users);


  return (
    <div className={styles.container}>
      {/* Table header */}
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      {/* Table Content */}
      <table className={styles.table}>
        {/* Table Head */}
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          <td>
            <div className={styles.user}>
              <Image
                src={"/noavatar.png"}
                alt=""
                width={40}
                height={40}
                className={styles.userImage}
              />
              John
            </div>            
          </td>
          <td>john@gmail.com</td>
          <td>13/02/2023</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/users/test`}>
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

export default UsersPage
