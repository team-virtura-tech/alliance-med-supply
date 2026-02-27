'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const CTAButtons = () => {
  const router = useRouter();

  return (
    <div
      data-component="CTAButtons"
      className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
    >
      <Button
        size="lg"
        variant="default"
        onClick={() => router.push('/contact-us')}
      >
        Contact Us Today
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => router.push('/products')}
      >
        Browse Equipment
      </Button>
    </div>
  );
};
