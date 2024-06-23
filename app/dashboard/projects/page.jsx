
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/projects/projects.module.css";
import Image from "next/image";
import Link from "next/link";

import CardProject from "../../ui/dashboard/cardProject/cardProject";
import { cardsProject } from "../../lib/data";

const UsersPage = async ({ searchParams }) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/projects/add">
          <button className={styles.addButton}>Add New Project</button>
        </Link>        
      </div>
      <div className={styles.cards}>
          {cardsProject.map((item) => (
            <CardProject item={item} key={item.id} />
          ))}
        </div>
    </div>
  );
};

export default UsersPage;
