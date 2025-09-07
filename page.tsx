
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <motion.section 
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 133, 137, 0.7), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20carpentry%20workshop%20with%20wooden%20textures%2C%20tools%20and%20craftsmanship%20details%2C%20warm%20lighting%2C%20modern%20workspace%20environment%2C%20high-quality%20craftsmanship%2C%20sophisticated%20woodwork%2C%20clean%20organized%20workshop%20setting%2C%20natural%20wood%20grain%20patterns%2C%20professional%20tools%20arrangement&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <motion.div 
          className="text-center text-white z-10 max-w-4xl mx-auto px-4"
          style={{ opacity, scale, y }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="serif-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            BAHR AL FANOOS
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="serif-title text-2xl md:text-4xl font-medium mb-4 text-gray-100"
          >
            TECHNICAL SERVICES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light mb-12 text-gray-200"
          >
            Our Expertise, Solutions Simplified
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-[#018589] text-white font-semibold rounded-full hover:bg-[#016b6f] transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
            >
              Browse Services
              <i className="ri-arrow-right-line ml-2 text-lg"></i>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <i className="ri-arrow-down-line text-white text-3xl drop-shadow-lg"></i>
        </motion.div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#018589] origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.section>

      {/* Why Choose Us Section with Stagger Animation */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-[#018589] opacity-5 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="serif-title text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-[#018589] mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Professional technical services with years of expertise and commitment to excellence
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-tools-line',
                title: 'Expert Craftsmanship',
                description: 'Skilled professionals with years of experience in technical services'
              },
              {
                icon: 'ri-time-line',
                title: 'Timely Delivery',
                description: 'We complete projects on time without compromising on quality'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Quality Assurance',
                description: 'Every project undergoes rigorous quality checks and standards'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#018589] to-[#016b6f] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                />
                
                <motion.div 
                  className="w-16 h-16 bg-[#018589] rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </motion.div>
                
                <h3 className="serif-title text-xl font-semibold text-gray-900 mb-4 text-center relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center relative z-10">
                  {feature.description}
                </p>
                
                {/* Decorative Element */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#018589] opacity-10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Advanced Effects */}
      <motion.section 
        className="py-20 bg-[#018589] relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -30, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="serif-title text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-white mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          >
            Contact us today for professional technical services tailored to your needs
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#018589] font-semibold rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:shadow-2xl"
              >
                Visit Our Location
                <motion.i 
                  className="ri-map-pin-line ml-2 text-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotateY: -10,
                boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="https://wa.me/971559508165"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#018589] transition-all duration-500 transform hover:shadow-2xl"
              >
                WhatsApp Us
                <motion.i 
                  className="ri-whatsapp-line ml-2 text-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
}
