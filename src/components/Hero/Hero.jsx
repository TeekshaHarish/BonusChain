import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero=()=>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Bonus Chain</h1>
                <a href="#" className={styles.contactBtn}>Get Started</a>
            </div>
            <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" alt="Hero Image of Me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}