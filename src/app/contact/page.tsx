import { ContactForm } from '@/components/custom';
import { ContactCard } from '@/components/ui/contact-card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Alliance Medical Supply',
  description:
    "Get in touch with our friendly team. We're here to help with all your medical equipment needs.",
};

export default function ContactPage() {
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
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24 space-y-12 lg:space-y-16">
        {/* ContactCard with form */}
        <ContactCard
          title="How can we help?"
          description="Get in touch with our friendly team. We're here to help with all your medical equipment needs."
          contactInfo={contactInfo}
          className="rounded-2xl"
        >
          <ContactForm />
        </ContactCard>

        {/* Map section */}
        <div className="w-full">
          <div className="h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border overflow-hidden">
            {/* Map placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="typography-card-title text-foreground">
                    Visit Our Location
                  </h3>
                  <p className="typography-body text-muted-foreground">
                    Find us in San Jose, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
