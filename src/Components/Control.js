import React from 'react'
import styles from '../Burgertop.module.css'


export const Control = () => {
  return (
    <div className={styles.BuildControls__BuildControls__220uz}>
      <p>Current price: <strong>$3.00</strong></p>
      <div className={styles.BuildControl__BuildControl__ibcUQ}>
        <div className={styles.BuildControl__Label__2VLnR}>Lettuce</div>
        <button className={styles.BuildControl__Less__3X6hg} disabled="">Less</button>
        <button className={styles.BuildControl__More__2eQpV}>More</button>
      </div>
      <div className={styles.BuildControl__BuildControl__ibcUQ}>
        <div className={styles.BuildControl__Label__2VLnR}>Bacon</div>
        <button className={styles.BuildControl__Less__3X6hg} disabled="">Less</button>
        <button className={styles.BuildControl__More__2eQpV}>More</button>
      </div>
      <div className={styles.BuildControl__BuildControl__ibcUQ}>
        <div className={styles.BuildControl__Label__2VLnR}>Cheese</div>
        <button className={styles.BuildControl__Less__3X6hg} disabled="">Less</button>
        <button className={styles.BuildControl__More__2eQpV}>More</button>
      </div>
      <div className={styles.BuildControl__BuildControl__ibcUQ}>
        <div className={styles.BuildControl__Label__2VLnR}>Meat</div>
        <button className={styles.BuildControl__Less__3X6hg} disabled="">Less</button>
        <button className={styles.BuildControl__More__2eQpV}>More</button>
      </div>
      <button className={styles.BuildControls__OrderButton__1ScSk} disabled="">SIGN UP TO ORDER</button>
    </div>
  )
}
