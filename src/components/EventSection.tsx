import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Trophy, Book,  Users as UsersIcon } from 'lucide-react';
import { Evenement } from '../types';
import SectionTitle from './SectionTitle';

const EventSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events: Evenement[] = [
    {
      id: 1,
      titre: 'Cérémonie d\'ouverture & Thé Débat',
      date: '26 Septembre 2025 - 17h',
      resume: 'Lancement officiel avec la présence et les discours des autorités.',
      jour: 'vendredi',
    },
    {
      id: 2,
      titre: 'Activités environnementales',
      date: '27 Septembre 2025 - 9h',
      resume: 'Set Setal - Activité de reboisement.',
      jour: 'samedi',
    },
    {
      id: 3,
      titre: 'Exposition culturelle',
      date: '27 Septembre 2025 - 17h',
      resume: 'Années-60 suivi de Sabar.',
      jour: 'samedi',
    },
    {
      id: 4,
      titre: 'Cloture & Tournoi sportif',
      date: '28 Septembre 2025 - 20h',
      resume: 'Match de Gala entre les habitants de la cité.',
      jour: 'dimanche',
    },

  ];

  const getJourColor = (jour: string) => {
    switch (jour) {
      case 'vendredi':
        return 'bg-ajcdc-primary';
      case 'samedi':
        return 'bg-ajcdc-green';
      case 'dimanche':
        return 'bg-ajcdc-blue';
      default:
        return 'bg-gray-500';
    }
  };

  const getJourIcon = (jour: string) => {
    switch (jour) {
      case 'vendredi':
        return Book;
      case 'samedi':
        return Trophy;
      case 'dimanche':
        return UsersIcon;
      default:
        return Calendar;
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-ajcdc-blue/5 to-ajcdc-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Week-end Culturel 2025"
          subtitle="Trois jours de célébration, de partage et de découverte"
        />

        {/* Event Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-ajcdc-primary" />
              <span className="text-lg font-semibold text-ajcdc-blue">26-28 Septembre 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-ajcdc-green" />
              <span className="text-lg font-semibold text-ajcdc-blue">CDC Bambilor</span>
            </div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Un événement majeur qui rassemble toute la communauté autour des arts, du sport, 
            de la culture et du dialogue intergénérationnel.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-ajcdc-primary via-ajcdc-green to-ajcdc-blue rounded-full" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const Icon = getJourIcon(event.jour);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full ${getJourColor(event.jour)} border-4 border-white shadow-lg`} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-ajcdc-primary">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full ${getJourColor(event.jour)}/10`}>
                          <Icon className={`h-6 w-6 text-current`} style={{ color: getJourColor(event.jour).replace('bg-', '#').replace('ajcdc-primary', '#C9A227').replace('ajcdc-green', '#1B5E20').replace('ajcdc-blue', '#003399') }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="h-4 w-4 text-ajcdc-primary" />
                            <span className="text-sm font-medium text-ajcdc-primary uppercase tracking-wide">
                              {event.jour}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-ajcdc-blue mb-2">
                            {event.titre}
                          </h3>
                          <p className="text-ajcdc-primary font-semibold mb-3">
                            {event.date}
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            {event.resume}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-ajcdc-green text-ajcdc-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-ajcdc-green hover:text-white transition-colors"
            >
              Télécharger l'affiche
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;