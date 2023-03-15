import React from 'react'
import cl from 'classnames'

import styles from './index.module.scss'

const PostGrid = ({
    className,
    children,
    role // agregamos la propiedad role al destructuring
}) => {
  return (
    <div className={cl(className, styles.postGrid)} role={role}>
        {children}
    </div>
    )
}

export default PostGrid;
