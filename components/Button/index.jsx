import React from 'react'
import cl from 'classnames'

import styles from './index.module.scss'

const Button = ({
    children,
    className,
    disable,
    onClick,
}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disable}
    className={cl(className, styles.button )}    
    >
        {children}
    </button>
    )
}

export default Button