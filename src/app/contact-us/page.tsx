'use client';

import { ContactForm } from '@/components/custom';
import { ContactCard } from '@/components/ui/contact-card';
import { useInView } from '@/hooks/useInView';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveMap } from './interactiveMap';

export default function ContactPage() {
  // Scroll-triggered animations
  const { ref: cardRef, isInView: cardInView } = useInView({ amount: 0.3 });
  const { ref: mapRef, isInView: mapInView } = useInView({ amount: 0.2 });

  // Contact information data for the ContactCard component
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(408) 942-9000',
    },
    {
      icon: Mail,
      label: 'Fax',
      value: '(408) 251-1015',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '1630 Oakland Road, Suite A110, San Jose, CA 95131',
    },
    {
      icon: Clock,
      label: 'Hours',
      value:
        'Mon-Fri: 11:00 AM - 5:00 PM • Sat: By Appointment Only • Sun: Closed',
    },
  ];

  return (
    <motion.main
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24 space-y-12 lg:space-y-16">
        {/* ContactCard with form */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ContactCard
            title="How can we help?"
            description="Get in touch with our friendly team. We're here to help with all your medical equipment needs."
            contactInfo={contactInfo}
            className="rounded-2xl"
          >
            <ContactForm />
          </ContactCard>
        </motion.div>

        {/* Map section */}
        <motion.div
          ref={mapRef}
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl"
          >
            <InteractiveMap
              address="1630 Oakland Road, Suite A110, San Jose, CA 95131"
              height="h-96 lg:h-[500px]"
              className="w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
