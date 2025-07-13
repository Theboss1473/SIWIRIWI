import React from 'react';
import { Helmet } from 'react-helmet';
import { ShieldAlert, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Generadores = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('generadores.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('generadores.subtitle')} />
      </Helmet>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          {t('generadores.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('generadores.subtitle')}
        </p>
      </header>

      <section className="card-dark p-8 rounded-lg flex flex-col md:flex-row items-center gap-8">
        <Info className="h-24 w-24 text-blue-400 flex-shrink-0" />
        <div>
          <h2 className="text-3xl font-bold text-blue-300 mb-4">{t('generadores.honestPerspective')}</h2>
          <p className="text-muted-foreground mb-2">
            {t('generadores.p1')}
          </p>
          <p className="text-muted-foreground">
            {t('generadores.p2')}
          </p>
          <Button asChild className="mt-4 neon-blue-btn">
            <Link to="/gana-robux">{t('generadores.discoverMethods')}</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">{t('generadores.commonRisks')}</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="card-dark p-6 rounded-lg">
            <ShieldAlert className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2 text-foreground">{t('generadores.risk1Title')}</h3>
            <p className="text-muted-foreground text-sm">{t('generadores.risk1Desc')}</p>
          </div>
          <div className="card-dark p-6 rounded-lg">
            <ShieldAlert className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2 text-foreground">{t('generadores.risk2Title')}</h3>
            <p className="text-muted-foreground text-sm">{t('generadores.risk2Desc')}</p>
          </div>
          <div className="card-dark p-6 rounded-lg">
            <ShieldAlert className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2 text-foreground">{t('generadores.risk3Title')}</h3>
            <p className="text-muted-foreground text-sm">{t('generadores.risk3Desc')}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">{t('generadores.relatedGuides')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/gana-robux" className="block card-dark p-6 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1">
            <h3 className="font-semibold text-lg text-foreground">{t('generadores.guide1')}</h3>
          </Link>
          <Link to="/eventos-secretos" className="block card-dark p-6 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1">
            <h3 className="font-semibold text-lg text-foreground">{t('generadores.guide2')}</h3>
          </Link>
          <Link to="/gana-robux" className="block card-dark p-6 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1">
            <h3 className="font-semibold text-lg text-foreground">{t('generadores.guide3')}</h3>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Button asChild className="neon-purple-btn text-lg py-6 px-8">
            <Link to="/trucos">{t('generadores.nextGuide')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Generadores;