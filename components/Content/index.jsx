import React from 'react'
import cl from 'classnames'
import BlockContent from '@sanity/block-content-to-react'

import styles from './index.module.scss'

import client, { ids } from '../../lib/client'

const Content = ({
    body,
    className
}) => {
  return (
    <div className={cl(className, styles.content)}>
        <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            projectId={ids.id}
            dataset={ids.post}
        />
    </div>
    )
}

export default Content;
