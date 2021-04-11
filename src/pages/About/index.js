import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.sass';

const About = ({ topPadding, path }) => {
  return (
    <motion.div
      key={path}
      id={styles.aboutPage}
      className="page content container is-fluid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, type: 'tween', ease: 'easeInOut'}}
    >
      <div className={styles.contentWrapper} style={{paddingTop: `${topPadding}px`}}>
        about
      </div>
    </motion.div>
  )
};

export default About;