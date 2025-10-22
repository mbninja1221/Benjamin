'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl" />
              <img
                src="/imgs/benjamin-martin.png"
                alt="Benjamin Martin"
                className="relative w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              With an extensive background spanning over nine years, I have honed my skills as a highly skilled full-stack developer, specializing in React development. Proficient in translating intricate designs into meticulously crafted code, I exemplify a commitment to excellence in design-to-code implementation.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              My expertise extends to implementing highly responsive user interface components using advanced React concepts, ensuring optimal user experiences across web and mobile platforms. Focused primarily on web and mobile development, I remain dedicated to staying abreast of industry trends and emerging technologies.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              My unwavering dedication to writing clean and reusable code, coupled with a keen adherence to best practices, underscores my commitment to delivering high-quality solutions that exceed expectations. I have successfully launched mobile apps with 400,000+ downloads and led development teams to create scalable platforms serving thousands of users.
            </p>

            <motion.a
              href="/resume.pdf"
              download="Benjamin_Martin_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 