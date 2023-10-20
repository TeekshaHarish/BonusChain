import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a latop" className={styles.aboutImage}/>
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Transparency</h3>
                    <p>All transactions and calculations are recorded on the blockchain, which is accessible to all employees. This ensures that everyone can see how bonuses are calculated and distributed.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Security</h3>
                    <p>The use of blockchain technology ensures that the system is secure and tamper-proof. Once a transaction is recorded on the blockchain, it cannot be changed or deleted.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>Fairness</h3>
                    <p>Bonuses are calculated based on objective metrics (in this case, pull requests), ensuring that they accurately reflect each employee's contributions.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>Efficiency</h3>
                    <p>The system automates the process of tracking contributions, calculating bonuses, and distributing them. This saves time and resources compared to manual processes.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>Profile Building</h3>
                    <p>The system can serve as a record of each employee’s contributions, providing a clear and objective measure of their performance</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
