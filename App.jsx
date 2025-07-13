import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'));
const GanaRobux = lazy(() => import('@/pages/GanaRobux'));
const Trucos = lazy(() => import('@/pages/Trucos'));
const EventosSecretos = lazy(() => import('@/pages/EventosSecretos'));
const Novedades = lazy(() => import('@/pages/Novedades'));
const Generadores = lazy(() => import('@/pages/Generadores'));
const Contacto = lazy(() => import('@/pages/Contacto'));
const Terminos = lazy(() => import('@/pages/Terminos'));
const Privacidad = lazy(() => import('@/pages/Privacidad'));

const PageLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight || document.body.scrollHeight;
    // Prevent division by zero
    if (scrollHeight === el.clientHeight) {
      setWidth(100);
      return;
    }
    const percent = (scrollTop / (scrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(() => {
        scrollHeight();
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1">
      <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${width}%` }}></div>
    </div>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full neon-purple-btn"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Helmet>
          <title>{t('home.title')} - Roblox Master Zone</title>
          <meta name="description" content={t('home.subtitle')} />
          <body className="bg-background" />
        </Helmet>
        
        <ReadingProgressBar />
        <Navbar />
        
        <main className="pt-20 flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-full"><p>Loading...</p></div>}>
            <PageLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gana-robux" element={<GanaRobux />} />
                <Route path="/trucos" element={<Trucos />} />
                <Route path="/eventos-secretos" element={<EventosSecretos />} />
                <Route path="/novedades" element={<Novedades />} />
                <Route path="/generadores" element={<Generadores />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/privacidad" element={<Privacidad />} />
              </Routes>
            </PageLayout>
          </Suspense>
        </main>
        
        <Footer />
        <Toaster />
        <ScrollToTopButton />
        
      </div>
    </Router>
  );
}

export default App;