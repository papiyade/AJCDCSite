import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Leaf, Heart, GraduationCap, Globe, Package, DollarSign } from 'lucide-react';
import { Commission } from '../types';
import SectionTitle from './SectionTitle';

const CommissionSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const commissions: Commission[] = [
    {
      id: 1,
      nom: 'Culture, Sociale et Sport',
      description: 'Organisation d\'événements culturels, sociaux, sportifs et artistiques pour dynamiser la vie communautaire.',
      icon: 'Music',
    },
    {
      id: 2,
      nom: 'Environnement',
      description: 'Sensibilisation écologique, actions de salubrité et préservation du cadre de vie.',
      icon: 'Leaf',
    },

    {
      id: 3,
      nom: 'Formation et Entrepreneuriat ',
      description: 'Sessions de formation professionnelle, ateliers de développement personnel, mentorat et entrepreneuriat .',
      icon: 'GraduationCap',
    },
    {
      id: 4,
      nom: 'Budget & Finance',
      description: 'Gestion financière, recherche de financements et transparence comptable.',
      icon: 'DollarSign',
    },
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Music,
      Leaf,
      Heart,
      GraduationCap,
      Globe,
      Package,
      DollarSign,
    };
    return icons[iconName as keyof typeof icons] || Music;
  };

  const getCommissionColor = (index: number) => {
    const colors = [
      'from-ajcdc-primary/20 to-ajcdc-primary/5 border-ajcdc-primary/30',
      'from-ajcdc-green/20 to-ajcdc-green/5 border-ajcdc-green/30',
      'from-ajcdc-red/20 to-ajcdc-red/5 border-ajcdc-red/30',
      'from-ajcdc-blue/20 to-ajcdc-blue/5 border-ajcdc-blue/30',
      'from-ajcdc-primary/20 to-ajcdc-primary/5 border-ajcdc-primary/30',
      'from-ajcdc-green/20 to-ajcdc-green/5 border-ajcdc-green/30',
      'from-ajcdc-red/20 to-ajcdc-red/5 border-ajcdc-red/30',
    ];
    return colors[index % colors.length];
  };

  const getIconColor = (index: number) => {
    const colors = [
      'text-ajcdc-primary',
      'text-ajcdc-green',
      'text-ajcdc-red',
      'text-ajcdc-blue',
      'text-ajcdc-primary',
      'text-ajcdc-green',
      'text-ajcdc-red',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="commissions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos Commissions"
          subtitle="Sept équipes dédiées pour une action structurée et efficace"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commissions.map((commission, index) => {
            const Icon = getIcon(commission.icon);
            
            return (
              <motion.div
                key={commission.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`bg-gradient-to-br ${getCommissionColor(index)} p-6 rounded-xl border hover:shadow-xl transition-all cursor-pointer group`}
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 ${getIconColor(index)}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-ajcdc-blue group-hover:text-ajcdc-primary transition-colors">
                    {commission.nom}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {commission.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="pt-2"
                  >
                    <span className={`text-sm font-semibold ${getIconColor(index)} hover:underline cursor-pointer`}>
                      En savoir plus →
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-ajcdc-blue/10 to-ajcdc-primary/10 p-8 rounded-2xl border border-ajcdc-blue/20">
            <h3 className="text-2xl font-bold text-ajcdc-blue mb-4">
              Rejoignez une commission
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque commission recherche des membres motivés pour contribuer au développement 
              de CDC Bambilor. Vos compétences et votre passion peuvent faire la différence !
            </p>
            <motion.a href='https://wa.me/+221771593408' target='_blank'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ajcdc-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-ajcdc-blue/90 transition-colors"
            >
              Devenir membre actif
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommissionSection;