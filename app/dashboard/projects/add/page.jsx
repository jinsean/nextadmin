import styles from "@/app/ui/dashboard/projects/addProjects/addProjects.module.css";

import React from 'react'

const AddUserPage = () => {
    return (
        <div className={styles.container}>
          <form  className={styles.form}>
            <select name="cat" id="cat">
              <option value="general">Project Type</option>
              <option value="kitchen">Solar</option>
              <option value="phone">Charging Station</option>
            </select>
            <input type="text" placeholder="title" name="title" />
            <textarea
              required
              name="desc"
              id="desc"
              rows="16"
              placeholder="Description"
            ></textarea>
            <input type="location" placeholder="location" name="location" />
            <input type="file"  />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default AddUserPage