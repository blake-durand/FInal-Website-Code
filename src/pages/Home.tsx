import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Portfolio } from '../components/Portfolio';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
      <Portfolio />
    </motion.main>
  );
};
