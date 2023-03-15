import React from 'react'
import cl from 'classnames'

import styles from './index.module.scss'

const Cover = ({
    className,
}) => {
  return (
    <div className={cl(className, styles.cover)}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: 'Healty<br />blog' }}
        />
    </div>
    )
}

export default Cover;