import React from 'react'
import cl from 'classnames'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import styles from './index.module.scss'
import ScreenEgg from '../ScreenEgg';

const socialNetworks = [
    {
        id: 3,
        href: 'https://www.linkedin.com/in/melvinmelendrez/',
        icon: AiFillLinkedin,
    },
    {
        id: 1,
        href: 'https://github.com/MelvinMelendrez',
        icon: AiFillGithub,
    },
    // {
    //     id: 2,
    //     href: 'https://www.instagram.com/melvinmelendrez/',
    //     icon: AiFillInstagram,
    // },

];


const SocialNetworks = ({
    className
}) => {
    return (
        <ScreenEgg>
            <ul className={cl(className, styles.list)}>
                {socialNetworks.map((socialNetworks) => (
                    <li
                        key={socialNetworks.id}
                        className={styles.listItem}
                    >
                        <a href={socialNetworks.href}
                            target="_blank"
                            className={styles.listLink}
                        >
                            {React.createElement(socialNetworks.icon,
                                {
                                    color: 'black',
                                    size: 50,

                                })}

                        </a>
                    </li>

                ))}
            </ul>
        </ScreenEgg>
    )
}

export default SocialNetworks;