/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Instagram, CheckCircle2, MapPin, Scissors, Clock, ShieldCheck, Star, ArrowRight, X } from 'lucide-react';

const EXPERT_DATA = {
  name: "Alves Barber Shop",
  profession: "Barbearia",
  city: "Rua Nelson Lomanto, 03 Jardim Helga - SP",
  whatsapp: "11978242289",
  instagram: "https://www.instagram.com/alvesbarbershop/",
  heroImage: "https://i.imgur.com/1y6kCg8.png",
  expertImage: "https://i.imgur.com/1y6kCg8.png",
};

const GALLERY_IMAGES = [
  "https://i.imgur.com/n76fENH.png",
  "https://i.imgur.com/Qd5WxI0.png",
  "https://i.imgur.com/RSHhysT.png",
  "https://i.imgur.com/a2BuMXi.png",
  "https://i.imgur.com/4oOmZEx.png",
  "https://i.imgur.com/PzicYt9.png",
  "https://i.imgur.com/fI2RNSR.png",
];

const WHATSAPP_LINK = `https://wa.me/55${EXPERT_DATA.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-dark">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Resultado"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT_DATA.heroImage} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-gold/20 text-gold border border-gold/30 rounded-full">
              {EXPERT_DATA.profession}
            </span>
            <h1 className="flex flex-col gap-2 mb-6">
              <span className="title-display text-white/90">Eu sou o</span>
              <span className="title-barber">Alves Barber Shop</span>
              <span className="title-display text-gold/80 text-lg md:text-2xl">Especialista em elevar sua autoestima</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Cortes modernos e barba impecável com atendimento exclusivo no Jardim Helga. Transforme seu visual hoje.
            </p>
            
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full sm:w-auto">
              <MessageCircle size={24} />
              Agendar horário no WhatsApp
            </a>
            <p className="mt-4 text-sm text-white/40 flex items-center justify-center sm:justify-start gap-2">
              <Clock size={14} /> Resposta rápida • Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="section-padding bg-dark-soft">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gold/20">
              <img 
                src={EXPERT_DATA.expertImage} 
                alt="Expert" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="title-serif mb-6 text-3xl">Paixão pela arte de transformar.</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Não é apenas um corte, é sobre como você se sente ao sair da cadeira. No Alves Barber Shop, cada detalhe é pensado para refletir sua personalidade e estilo.
            </p>
            <ul className="space-y-4">
              {[
                "Atendimento personalizado e individual",
                "Técnicas modernas de visagismo",
                "Ambiente premium e confortável",
                "Produtos de alta performance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="text-gold" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="title-serif mb-4">Resultados Reais</h2>
            <p className="text-white/50">Confira alguns dos trabalhos realizados recentemente.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className="aspect-[3/4] rounded-xl overflow-hidden cursor-zoom-in group relative"
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Ver Detalhes</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR? */}
      <section className="section-padding bg-dark-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-serif mb-4">Por que confiar em mim?</h2>
            <p className="text-white/50">Diferenciais que tornam o Alves Barber Shop único.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Star className="text-gold" />, title: "Avaliação Honesta", desc: "Análise detalhada do seu perfil para o melhor resultado." },
              { icon: <MessageCircle className="text-gold" />, title: "Atendimento Direto", desc: "Comunicação clara e sem enrolação desde o agendamento." },
              { icon: <Scissors className="text-gold" />, title: "Foco no Resultado", desc: "Técnicas precisas para garantir que você saia satisfeito." },
              { icon: <ShieldCheck className="text-gold" />, title: "Biossegurança", desc: "Ambiente e ferramentas rigorosamente higienizados." },
              { icon: <Clock className="text-gold" />, title: "Pontualidade", desc: "Respeito total ao seu tempo e compromisso." },
              { icon: <MapPin className="text-gold" />, title: "Localização", desc: "Fácil acesso no coração do Jardim Helga." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl hover:border-gold/40 transition-colors"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="section-padding bg-gold/5 border-y border-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Pronto para renovar sua confiança?</h2>
          <p className="text-white/70 mb-8">Agende agora e garanta seu horário com quem entende do assunto.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex">
            <MessageCircle size={24} />
            Agendar no WhatsApp
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-serif text-center mb-16">Como funciona</h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector lines for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent z-0" />
            
            {[
              { step: "01", title: "WhatsApp", desc: "Clique no botão e envie uma mensagem." },
              { step: "02", title: "Agendamento", desc: "Escolha o melhor dia e horário para você." },
              { step: "03", title: "Transformação", desc: "Venha até a barbearia e saia renovado." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-gold text-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-gold/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gold font-bold mb-4 italic">“Venha fazer seu agendamento no WhatsApp.”</p>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="title-serif mb-6">Não deixe para depois o que você pode transformar hoje.</h2>
            <p className="text-xl text-white/70 mb-10">Marque seu horário e descubra o poder de um corte bem feito.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex scale-110 py-6 px-12">
              <MessageCircle size={28} />
              QUERO AGENDAR MEU HORÁRIO AGORA
            </a>
            <p className="mt-8 text-white/30 text-sm uppercase tracking-[0.2em]">Vagas limitadas para esta semana</p>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-white/5 bg-dark text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif italic mb-2">{EXPERT_DATA.name}</h3>
          <p className="text-gold text-sm uppercase tracking-widest mb-6">{EXPERT_DATA.profession}</p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <MessageCircle size={24} />
            </a>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EXPERT_DATA.city)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-white transition-colors"
            >
              <MapPin size={24} />
            </a>
          </div>

          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} {EXPERT_DATA.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
