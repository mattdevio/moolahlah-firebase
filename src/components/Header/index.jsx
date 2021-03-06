import React from 'react'

import styles from './Header.css'
import moolahlahText from '../../img/moolahlah_text_only.png'
import Navigation from '../Navigation'

/**
 * Header - React Component
 * Displays the header with image and navigation
 */
const Header = () => (
  <header className={styles.container}>
    <div className={styles.wrapper}>
      <img src={moolahlahText} alt='moolahlah' className={styles.logo} />
      <Navigation />
    </div>
  </header>
)

export default Header
