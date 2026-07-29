import Footer from "../../components/layout/Footer";
import Stats from "../../components/home/Stats";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/common/Button";
import Features from "../../components/home/Features";

function Home() {
  return (
    <>
      <Navbar />

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl"></div>

        {/* Hero Badge */}
        <p className="relative z-10 mb-5 rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300">
          🚀 Your AI Productivity System
        </p>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl text-5xl font-black leading-tight lg:text-7xl"
        >
          Organize Your Life with{" "}
          <span className="text-purple-500">NOVAS OS</span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 mt-6 max-w-2xl text-lg leading-8 text-slate-400"
        >
          Manage notes, tasks, goals and boost your productivity with a
          beautiful modern workspace.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-10 flex flex-wrap justify-center gap-6"
        >
          <Button>Get Started</Button>
          <Button>Live Demo</Button>
        </motion.div>

      </section>

      <Features />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;