import { Hero } from '../components/Hero';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
    </motion.main>
  );
};
