import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'À propos', id: 'about' },
    { label: 'Mission', id: 'mission' },
    { label: 'Événements', id: 'events' },
    { label: 'Commissions', id: 'commissions' },
    { label: 'Galerie', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
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

  const contactInfo = [
    {
      icon: Mail,
      text: 'ajcdcbambilor@gmail.com',
    },
    {
      icon: Phone,
      text: 'tel:+221771593408',
    },
    {
      icon: MapPin,
      text: 'Cité CDC Bambilor, Rufisque',
    },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-ajcdc-primary" />
              <span className="font-bold text-xl">AJCDC</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Association des Jeunes de la Cité CDC Bambilor - Ensemble pour l'engagement 
              citoyen, la culture et le développement communautaire.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/10 p-2 rounded-lg hover:bg-ajcdc-primary/20 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4 text-ajcdc-primary">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-ajcdc-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 text-ajcdc-primary">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon className="h-4 w-4 text-ajcdc-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{info.text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4 text-ajcdc-primary">
              Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Restez informés de nos actualités et événements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-ajcdc-primary text-sm"
              />
              <button className="bg-ajcdc-primary px-4 py-2 rounded-r-lg hover:bg-ajcdc-primary/90 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Association des Jeunes CDC Bambilor. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-300 hover:text-ajcdc-primary text-sm transition-colors">
              Politique de confidentialité
            </button>
            <button className="text-gray-300 hover:text-ajcdc-primary text-sm transition-colors">
              Mentions légales
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;