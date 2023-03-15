import React from 'react'
import cl from 'classnames'

import styles from './index.module.scss'
import Link from 'next/link'

import { AiOutlineArrowLeft } from 'react-icons/ai'

const Article = ({
    children,
    className,
    backUrl,
}) => {
  return (
    <article className={cl(className, styles.article)}>
        <Link href={backUrl} legacyBehavior>
            <a className={styles.articleBack}>
                <AiOutlineArrowLeft/>
            </a>
        </Link>
        <div className={styles.articleContent}>
            {children}
        </div>
    </article>
    )
}

export default Article;
