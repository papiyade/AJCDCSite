import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Leaf, GraduationCap, Heart, Globe, Lightbulb } from 'lucide-react';
import SectionTitle from './SectionTitle';

const MissionSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const missions = [
    {
      icon: Users,
      title: 'Engagement Citoyen',
      description: 'Mobiliser la jeunesse pour une participation active dans la vie communautaire et démocratique.',
    },
    {
      icon: Heart,
      title: 'Solidarité',
      description: 'Développer l\'entraide et la cohésion sociale entre les habitants de CDC Bambilor.',
    },
    {
      icon: GraduationCap,
      title: 'Formation & Éducation',
      description: 'Organiser des sessions de formation et d\'accompagnement pour le développement personnel.',
    },
    {
      icon: Leaf,
      title: 'Environnement',
      description: 'Sensibiliser et agir pour la préservation de notre cadre de vie et l\'écologie urbaine.',
    },
  ];

  const enjeux = [
    {
      icon: Target,
      title: 'Citoyenneté Active',
      description: 'Encourager la participation des jeunes aux décisions qui concernent leur avenir.',
    },
    {
      icon: Globe,
      title: 'Inclusion Sociale',
      description: 'Lutter contre l\'exclusion et favoriser l\'intégration de tous les jeunes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Locale',
      description: 'Développer des solutions créatives aux défis de notre communauté.',
    },
  ];

  return (
    <section id="mission" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Missions & Enjeux"
          subtitle="Notre engagement pour un développement durable et inclusif"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Missions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-ajcdc-blue mb-8 text-center lg:text-left">
              Nos Missions
            </h3>
            <div className="space-y-6">
              {missions.map((mission, index) => {
                const Icon = mission.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4 border-ajcdc-primary"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-ajcdc-primary/10 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-ajcdc-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ajcdc-blue text-lg mb-2">
                          {mission.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {mission.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enjeux */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-ajcdc-blue mb-8 text-center lg:text-left">
              Nos Enjeux
            </h3>
            <div className="space-y-6">
              {enjeux.map((enjeu, index) => {
                const Icon = enjeu.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: -10 }}
                    className="bg-gradient-to-r from-ajcdc-green/5 to-ajcdc-blue/5 p-6 rounded-lg border border-ajcdc-green/20 hover:border-ajcdc-green/40 transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-ajcdc-green/10 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-ajcdc-green" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ajcdc-green text-lg mb-2">
                          {enjeu.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {enjeu.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;