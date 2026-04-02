'use client';

import { contact } from '@/data/contact';
import { trackPhoneClick } from '@/lib/gtag';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type PhoneLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'onClick'
> & {
  children: ReactNode;
};

/**
 * Phone link that tracks Google Ads "Website Phone Click" conversions.
 * Drop-in replacement for <a href={contact.phone.href}>.
 */
export function PhoneLink({ children, ...props }: PhoneLinkProps) {
  return (
    <a href={contact.phone.href} onClick={trackPhoneClick} {...props}>
      {children}
    </a>
  );
}
