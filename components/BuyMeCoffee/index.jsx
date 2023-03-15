import React from 'react'
import cl from 'classnames'

import styles from './index.module.scss'
import ScreenEgg from '../ScreenEgg'

const BuyMeCoffee = ({
    className
}) => {
  return (
    <ScreenEgg type="right">

        <div className={cl(className, styles.buyCoffee)}>
            <a href=""
            target="_blank"   
            className={styles.buyCoffeeButton}
            >
                Buy me a coffe...
            </a>
        </div>
    </ScreenEgg>
    )
}

export default BuyMeCoffee;