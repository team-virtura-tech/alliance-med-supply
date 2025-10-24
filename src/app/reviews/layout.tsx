import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Reviews - Alliance Medical Supply & Rental',
  description:
    'Read real reviews from customers across San Jose and Bay Area. JACHO accredited medical equipment provider with verified Google reviews.',
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
