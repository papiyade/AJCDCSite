import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Facebook, MessageCircle, Send, Users, CheckCircle } from 'lucide-react';
import { ContactForm } from '../types';
import SectionTitle from './SectionTitle';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<ContactForm>({
    nom: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nom: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'ajcdcbambilor@gmail.com',
      href: 'mailto:ajcdcbambilor@gmail.com',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+221 77 159 34 08',
      href: 'tel:+221771593408',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Cité CDC Bambilor, Rufisque, Sénégal',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61580854952743',
      target: '_blank',
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      name: 'TikTok',
      href: 'https://www.tiktok.com/@lesjeunesdelacdc?is_from_webapp=1&sender_device=pc',
      color: 'hover:text-black',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-ajcdc-blue/5 to-ajcdc-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contactez-nous & Rejoignez-nous"
          subtitle="Ensemble, construisons l'avenir de CDC Bambilor"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-ajcdc-blue mb-6">
                Nos coordonnées
              </h3>
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group"
                  >
                    <div className="bg-ajcdc-primary/10 p-3 rounded-full group-hover:bg-ajcdc-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-ajcdc-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-ajcdc-blue">{info.title}</p>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-ajcdc-blue">
                Suivez-nous
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-white p-4 rounded-full shadow-md hover:shadow-lg transition-all ${social.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-ajcdc-primary/10 to-ajcdc-blue/10 p-6 rounded-xl border border-ajcdc-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-ajcdc-primary" />
                <h3 className="text-xl font-bold text-ajcdc-blue">
                  Devenez membre
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Rejoignez notre communauté de jeunes engagés et participez activement 
                au développement de CDC Bambilor.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-ajcdc-green" />
                  <span>Participation aux événements et formations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-ajcdc-green" />
                  <span>Intégration dans une commission</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-ajcdc-green" />
                  <span>Réseau professionnel et social</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-ajcdc-blue mb-6">
              Envoyez-nous un message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-ajcdc-green mx-auto mb-4" />
                <h4 className="text-xl font-bold text-ajcdc-green mb-2">
                  Message envoyé !
                </h4>
                <p className="text-gray-600">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ajcdc-primary focus:border-ajcdc-primary transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ajcdc-primary focus:border-ajcdc-primary transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ajcdc-primary focus:border-ajcdc-primary transition-colors resize-vertical"
                    placeholder="Votre message, questions ou motivation pour rejoindre l'association..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-ajcdc-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-ajcdc-primary/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;