'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

type ContactInfoProps = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  label: string;
  value: string;
  hours?: string;
  href?: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
  // Content props
  title?: string;
  description?: string;
  contactInfo?: ContactInfoProps[];
  formSectionClassName?: string;
};

export function ContactCard({
  title = 'Contact With Us',
  description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
  contactInfo,
  className,
  formSectionClassName,
  children,
}: ContactCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-card relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3',
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -2 }}
      data-component="ContactCard"
    >
      <div className="flex flex-col justify-between lg:col-span-2">
        <motion.div
          className="relative h-full space-y-4 px-4 py-8 md:p-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1
            className="text-3xl font-bold md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {contactInfo?.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <ContactInfo {...info} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={cn(
          'bg-muted/40 flex h-full w-full items-center p-5 md:col-span-1',
          formSectionClassName
        )}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  hours,
  href,
  className,
}: ContactInfoProps) {
  const content = (
    <>
      <motion.div
        className="bg-muted/40 rounded-lg p-3"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <div>
        <p className="font-medium text-base md:text-lg">{label}</p>
        <p className="text-muted-foreground text-sm md:text-base">{value}</p>
        {hours && (
          <p className="text-muted-foreground text-xs md:text-sm mt-1">
            {hours}
          </p>
        )}
      </div>
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(
          'flex items-center gap-3 py-3 cursor-pointer hover:opacity-90 transition-opacity',
          className
        )}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        data-component="ContactInfo"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={cn('flex items-center gap-3 py-3', className)}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      data-component="ContactInfo"
    >
      {content}
    </motion.div>
  );
}
