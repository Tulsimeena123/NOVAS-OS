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

      <section className="flex justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-full border border-purple-500/40 bg-purple-500/10 px-6 py-2 text-sm font-medium text-purple-300"
          >
            🚀 Your AI Productivity System
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl"
          >
            Organize Your Life with{" "}
            <span className="text-purple-500">
              NOVAS OS
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-slate-400"
          >
            Manage notes, tasks, goals and boost your productivity with a
            beautiful modern workspace designed to keep everything organized in
            one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <Button>Get Started</Button>
            <Button>Live Demo</Button>
          </motion.div>

        </div>
      </section>

      <Features />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;