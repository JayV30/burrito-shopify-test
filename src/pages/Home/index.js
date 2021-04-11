import React from 'react';
import { motion } from 'framer-motion';
import styles from './home.module.sass';

const Home = ({ topPadding, path }) => {
  return (
    <motion.div
      key={path}
      id={styles.homePage}
      className="page content container is-fluid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut'}}
    >
      <div className={styles.contentWrapper} style={{paddingTop: `${topPadding}px`}}>
        home
      </div>
    </motion.div>
  )
};

export default Home;