import React from 'react'
import styles from "../Burgertop.module.css";
export const BurgerContent = () => {
  let burger = [];
  burger.push(1000);
  return (
    <div>
      <div className={styles.Burger__Burger__2h2kL}>
        <div className={styles.BurgerIngredient__BreadTop__2Pkwe}>
          <div className={styles.BurgerIngredient__Seeds1__2k2x7}></div>
          <div className={styles.BurgerIngredient__Seeds2__9Mret}></div>
        </div>

        {burger.length === 0 ? (
          <p>No Ingredients Added</p>
        ) : (
          burger.map((ing) => {
            return (
              <>
                <div className={styles.BurgerIngredient__Lettuce__zoLnB}></div>
              </>
            );
          })
        )}
        <div className={styles.BurgerIngredient__BreadBottom__2z9NQ}></div>
      </div>
    </div>
  )
}
