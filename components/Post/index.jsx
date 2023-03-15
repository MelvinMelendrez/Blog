import React from 'react'
import cl from 'classnames'
import Link from 'next/link'
import Image from 'next/image'




import Title from '../Title'
import {urlFor} from "../../lib/client";

import styles from './index.module.scss'

const Post = ({
    className,
    image,
    title,
    description,
    slug,
}) => {
  return (

    <Link to="/my-path" legacyBehavior
        href={`/post/${encodeURIComponent(slug.current)}`}
        passHref
        className={cl(className, styles.post)}>

        <a href='' className={styles.postLink}>
            
            <Title         
                type="small"
                className={styles.postTitle}>
                    {title} 
            </Title>

            <div className={styles.postContent}>
                <div className={styles.postImage}>
                    <Image
                    src={urlFor(image).url()}
                    alt='img'
                    width="100"
                    height="100"
                    />
                </div>
                <p className={styles.postDescription}>
                    {description}
                </p>
            </div>
        </a>
    </Link>
    )
}

export default Post;
