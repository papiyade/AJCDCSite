import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, Award, Heart } from 'lucide-react';
import SectionTitle from './SectionTitle';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: '50+', label: 'Membres actifs' },
    { icon: Calendar, value: '2+', label: 'Événements par an' },
    { icon: Award, value: '4', label: 'Commissions' },
    { icon: Heart, value: '1+', label: 'Années d\'engagement' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="À propos de nous"
          subtitle="Une communauté unie pour l'avenir de CDC Bambilor"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Fondée sur les valeurs de <strong className="text-ajcdc-primary">solidarité</strong>, 
                d'<strong className="text-ajcdc-green">engagement citoyen</strong> et de 
                <strong className="text-ajcdc-blue"> développement communautaire</strong>, 
                l'Association des Jeunes de la Cité CDC Bambilor rassemble les forces vives 
                de notre quartier.
              </p>
              <p className="text-lg">
                Nous œuvrons quotidiennement pour le rayonnement culturel, social et 
                environnemental de notre communauté à travers des actions concrètes 
                et des initiatives innovantes.
              </p>
              <p className="text-lg">
                Notre vision : <em className="text-ajcdc-blue font-semibold">
                  "Construire ensemble un avenir meilleur pour CDC Bambilor en valorisant 
                  le potentiel de chaque jeune et en renforçant les liens communautaires."
                </em>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="bg-ajcdc-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                Culture & Sport
              </span>
              <span className="bg-ajcdc-green text-white px-4 py-2 rounded-full text-sm font-medium">
                Environnement
              </span>
              <span className="bg-ajcdc-red text-white px-4 py-2 rounded-full text-sm font-medium">
                Solidarité
              </span>
              <span className="bg-ajcdc-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                Formation
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all"
                >
                  <div className="bg-ajcdc-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-ajcdc-primary" />
                  </div>
                  <div className="text-3xl font-bold text-ajcdc-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;