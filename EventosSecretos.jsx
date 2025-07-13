
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, Gift, AlertTriangle, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const EventosSecretos = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleParticipateClick = (eventName) => {
    toast({
      title: `✅ ¡Mucha suerte en el evento!`,
      description: `Has simulado tu participación en "${eventName}".`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('eventos.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('eventos.subtitle')} />
      </Helmet>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          {t('eventos.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('eventos.subtitle')}
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">{t('eventos.activeEvents')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-dark p-6 rounded-lg space-y-4 relative"
          >
            <div className="flex items-center text-primary font-bold text-lg">
              <Calendar className="mr-3 h-6 w-6" />
              {t('eventos.summerTreasure')}
            </div>
            <div className="flex items-center text-foreground">
              <Gift className="mr-3 h-5 w-5 text-green-400" />
              <strong>{t('eventos.reward')}:</strong>&nbsp;{t('eventos.exclusiveItem')}
            </div>
            <div className="flex items-center text-foreground">
              <Percent className="mr-3 h-5 w-5 text-yellow-400" />
              <strong>{t('eventos.winChance')}:</strong>&nbsp;{t('eventos.highChance')}
            </div>
            <div className="flex items-center text-red-400">
              <AlertTriangle className="mr-3 h-5 w-5" />
              <strong>{t('eventos.endsIn')}:</strong>&nbsp;{t('eventos.days')}
            </div>
            <Button onClick={() => handleParticipateClick(t('eventos.summerTreasure'))} className="w-full neon-purple-btn mt-4">{t('eventos.participate')}</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-dark p-6 rounded-lg space-y-4 relative"
          >
            <div className="flex items-center text-primary font-bold text-lg">
              <Calendar className="mr-3 h-6 w-6" />
              {t('eventos.communityRaffle')}
            </div>
            <div className="flex items-center text-foreground">
              <Gift className="mr-3 h-5 w-5 text-green-400" />
              <strong>{t('eventos.reward')}:</strong>&nbsp;{t('eventos.reward10k')}
            </div>
            <div className="flex items-center text-foreground">
              <Percent className="mr-3 h-5 w-5 text-yellow-400" />
              <strong>{t('eventos.winChance')}:</strong>&nbsp;{t('eventos.lowChance')}
            </div>
            <div className="flex items-center text-red-400">
              <AlertTriangle className="mr-3 h-5 w-5" />
              <strong>{t('eventos.endsIn')}:</strong>&nbsp;{t('eventos.hours')}
            </div>
            <Button onClick={() => handleParticipateClick(t('eventos.communityRaffle'))} className="w-full neon-purple-btn mt-4">{t('eventos.participate')}</Button>
          </motion.div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">{t('eventos.pastEvents')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-lg">
            <img loading="lazy" className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" alt="Personaje de Roblox espeluznante en un mundo con temática de Halloween" src="https://images.unsplash.com/photo-1648614560280-d064476dc24d" />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">{t('eventos.halloweenEvent')}</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img loading="lazy" className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" alt="Dos personajes de Roblox luchando en una arena nevada" src="https://images.unsplash.com/photo-1584013979669-d07173e8a073" />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">{t('eventos.winterTournament')}</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img loading="lazy" className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" alt="Un mundo colorido de Roblox lleno de huevos de Pascua" src="https://images.unsplash.com/photo-1681664951333-e91936d730c8" />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">{t('eventos.easterEggHunt')}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventosSecretos;
