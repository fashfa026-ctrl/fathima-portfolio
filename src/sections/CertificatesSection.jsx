import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Award, X, ExternalLink } from 'lucide-react';
import { timeline } from '../data/timeline';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9, rotateX: 8 },
  show: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const CertificatesSection = () => {
  const { certifications } = timeline;
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="certificates" className="py-20 border-t border-[var(--border)] scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Certificates" eyebrow="Credentials" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {certifications.map((cert) => {
            const imageUrl = cert.links?.[0]?.url;

            return (
              <motion.div
                key={cert.id}
                variants={item}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-300"
              >
                {/* Certificate image preview */}
                <motion.div
                  className="relative aspect-[4/3] bg-white cursor-pointer overflow-hidden"
                  onClick={() => imageUrl && setLightboxImage(imageUrl)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Award size={40} className="text-gray-300" />
                    </div>
                  )}
                </motion.div>

                {/* Certificate info */}
                <div className="p-4 space-y-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                    {cert.title}
                  </h4>
                  <div className="text-[11px] font-mono text-[var(--text-secondary)]">
                    {cert.issuer}
                  </div>
                  <div className="flex items-center justify-end pt-1">
                    {imageUrl && (
                      <button
                        onClick={() => setLightboxImage(imageUrl)}
                        className="cursor-pointer text-[11px] font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 font-mono"
                      >
                        View Certificate <ExternalLink size={11} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="cursor-pointer absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              >
                <X size={20} />
              </button>
              <img
                src={lightboxImage}
                alt="Certificate"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
