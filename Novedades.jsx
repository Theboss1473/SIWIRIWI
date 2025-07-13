
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Newspaper, HelpCircle, Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';

const Novedades = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [selectedNews, setSelectedNews] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const newsItems = [
    {
      title: t('novedades.news1Title'),
      category: t('novedades.news1Cat'),
      img_alt: 'Una comparación lado a lado de los gráficos antiguos y nuevos de Roblox',
      content: 'Roblox ha confirmado oficialmente el desarrollo de un motor gráfico de nueva generación que promete revolucionar la plataforma. Según el comunicado, los jugadores pueden esperar mejoras significativas en la iluminación, sombras dinámicas y texturas de alta resolución. Para los desarrolladores, esto abrirá un nuevo abanico de posibilidades para crear experiencias más inmersivas y visualmente impactantes. La actualización se implementará gradualmente a lo largo del próximo año, comenzando con un grupo selecto de juegos para pruebas beta.'
    },
    {
      title: t('novedades.news2Title'),
      category: t('novedades.news2Cat'),
      img_alt: 'Una imagen borrosa y filtrada de un lobby de Roblox con temática navideña',
      content: 'Una serie de archivos encontrados en la última actualización de Roblox ha desatado una ola de especulaciones. Las imágenes filtradas muestran un lobby con temática invernal, nuevos ítems cosméticos como gorros de Papá Noel y un misterioso portal. La comunidad cree que se trata de un evento global de Navidad, similar al de años anteriores pero a una escala mucho mayor. Se rumorea que habrá misiones diarias, un jefe de evento y recompensas exclusivas para quienes participen. Roblox no ha confirmado nada, pero la evidencia es convincente.'
    },
    {
      title: t('novedades.news3Title'),
      category: t('novedades.news3Cat'),
      img_alt: 'El logo del juego Adopt Me con una burbuja de diálogo',
      content: 'Tras una semana de intensas críticas por parte de la comunidad, el equipo de Adopt Me ha publicado una declaración oficial. La controversia se centró en la baja probabilidad de obtener las nuevas mascotas legendarias, lo que muchos jugadores consideraron injusto. Los desarrolladores han pedido disculpas y han anunciado un parche de emergencia que aumentará las probabilidades y compensará a los jugadores que gastaron Robux durante la primera semana del evento con "Cajas de Lealtad" especiales. La comunidad ha recibido la noticia con optimismo.'
    }
  ];

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
    setIsDialogOpen(true);
  };

  const handleFakeOrRealClick = (isReal) => {
    toast({
      title: isReal ? "✅ ¡Correcto!" : "❌ ¡Incorrecto!",
      description: isReal ? "Esta noticia es verdadera. ¡Bien hecho!" : "Este rumor es falso. ¡No te dejes engañar!",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Helmet>
        <title>{t('novedades.title')} - Roblox Master Zone</title>
        <meta name="description" content={t('novedades.subtitle')} />
      </Helmet>

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
          {t('novedades.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('novedades.subtitle')}
        </p>
      </header>

      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-dark rounded-lg overflow-hidden md:flex group cursor-pointer"
              onClick={() => handleNewsClick(item)}
            >
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt={item.img_alt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold text-primary mb-2 block">{item.category}</span>
                  <h2 className="text-2xl font-bold text-foreground mb-4">{item.title}</h2>
                </div>
                <div className="font-semibold text-primary hover:text-primary/80 flex items-center">{t('novedades.readFullStory')} <ArrowRight className="ml-2 h-4 w-4" /></div>
              </div>
            </motion.div>
          ))}
        </div>
        <aside className="space-y-8">
          <div className="card-dark p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><HelpCircle className="mr-2 text-primary" /> {t('novedades.fakeOrReal')}</h3>
            <div className="space-y-4">
              <div className="border-b border-border pb-2">
                <p className="text-muted-foreground">{t('novedades.q1')}</p>
                <div className="flex justify-end space-x-2 mt-2">
                  <Button size="sm" onClick={() => handleFakeOrRealClick(false)} className="bg-green-500/20 text-green-400 hover:bg-green-500/30"><Check className="h-4 w-4" /> {t('novedades.real')}</Button>
                  <Button size="sm" onClick={() => handleFakeOrRealClick(true)} className="bg-red-500/20 text-red-400 hover:bg-red-500/30"><X className="h-4 w-4" /> {t('novedades.fake')}</Button>
                </div>
              </div>
              <div className="border-b border-border pb-2">
                <p className="text-muted-foreground">{t('novedades.q2')}</p>
                <div className="flex justify-end space-x-2 mt-2">
                  <Button size="sm" onClick={() => handleFakeOrRealClick(false)} className="bg-green-500/20 text-green-400 hover:bg-green-500/30"><Check className="h-4 w-4" /> {t('novedades.real')}</Button>
                  <Button size="sm" onClick={() => handleFakeOrRealClick(true)} className="bg-red-500/20 text-red-400 hover:bg-red-500/30"><X className="h-4 w-4" /> {t('novedades.fake')}</Button>
                </div>
              </div>
              <div className="border-b border-border pb-2">
                <p className="text-muted-foreground">{t('novedades.q3')}</p>
                <div className="flex justify-end space-x-2 mt-2">
                  <Button size="sm" onClick={() => handleFakeOrRealClick(true)} className="bg-green-500/20 text-green-400 hover:bg-green-500/30"><Check className="h-4 w-4" /> {t('novedades.real')}</Button>
                  <Button size="sm" onClick={() => handleFakeOrRealClick(false)} className="bg-red-500/20 text-red-400 hover:bg-red-500/30"><X className="h-4 w-4" /> {t('novedades.fake')}</Button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px] bg-secondary border-primary">
          <DialogHeader>
            <DialogTitle className="gradient-text text-2xl">{selectedNews?.title}</DialogTitle>
            <DialogDescription>
              <span className="text-sm font-semibold text-primary mt-2 block">{selectedNews?.category}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-invert text-muted-foreground max-h-60 overflow-y-auto pr-4 my-4">
              <p>{selectedNews?.content}</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>{t('novedades.close')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Novedades;
