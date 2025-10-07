'use client';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export type ContactFormProps = {
  id?: string;
  className?: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export const ContactForm = ({ id, className }: ContactFormProps) => {
  const componentName = 'ContactForm';
  const rootId = id ?? componentName;

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={`space-y-6 ${className || ''}`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="typography-small font-medium text-foreground"
            >
              First name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`h-12 ${errors.firstName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? 'firstName-error' : undefined
              }
            />
            {errors.firstName && (
              <p
                id="firstName-error"
                className="typography-small text-destructive"
              >
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="typography-small font-medium text-foreground"
            >
              Last name
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`h-12 ${errors.lastName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <p
                id="lastName-error"
                className="typography-small text-destructive"
              >
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="typography-small font-medium text-foreground"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`h-12 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="typography-small text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label
            htmlFor="subject"
            className="typography-small font-medium text-foreground"
          >
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="What can we help you with?"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className={`h-12 ${errors.subject ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="typography-small text-destructive">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="typography-small font-medium text-foreground"
          >
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us how we can help..."
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`min-h-[120px] resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="typography-small text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Sending...
            </div>
          ) : (
            'Send message'
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="typography-small text-primary font-medium">
              Thank you! Your message has been sent successfully. We&apos;ll get
              back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="typography-small text-destructive font-medium">
              Sorry, there was an error sending your message. Please try again
              or contact us directly.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
